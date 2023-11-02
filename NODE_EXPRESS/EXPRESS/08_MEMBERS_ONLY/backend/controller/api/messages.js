const express = require('express');
const router = express.Router();
const Message = require('../../model/MessagesSchema');
const User = require('../../model/UsersSchema');
//PassportJS
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');




router.get('/users', (req, res) => {
    User.find({})
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({ msg: 'could not find the data' })
        })
})
/* .sort({ _id: -1 }) */
router.get('/', (req, res) => {
    Message.find({})
        .limit(20)
        .sort({ _id: -1 })
        .then(msgs => {
            res.status(200).json(msgs);
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({msg: 'could not find the data'});
        })
})

//Post messages by username
router.post('/', async(req, res) => {
    const body = req.body;
    try{
        const user = await User.findOne({ username: body.username });

        if (!user) {
            return res.status(400).json({ msg: 'User not found' });
        }
        
        const newMessage = new Message({
            username: user.username,
            title: body.title,
            description: body.description,
            messageImg: body.messageImg,
            profilePic: user.profilePic
        })
        
        const savedMsg = await newMessage.save();

        res.status(200).json({
            msg: 'Saved successfully',
            savedMsg: savedMsg
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({ msg: 'could not post' })
    }

})

//Find all messages from a username
router.get('/msg/:username', (req, res) => {
    const body = req.params;
    if(!body.username){
        res.status(404).json({msg: 'invalid username'});
    }
    Message.find({ username: body.username })
        .sort({ _id: -1 })
        .then(msgs => {
            res.status(200).json(msgs);
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({msg: 'could not find data by user name'})
        })
})

//Find the users info
router.get('/users/:username', (req, res) =>{
    const userParam = req.params.username;

    User.findOne({username: userParam})
        .then(usr => 
            {
                res.status(200).json({
                    username: usr.username,
                    email: usr.email,
                    _id: usr._id,
                    profilePic: usr.profilePic
                })
            }
            )
        .catch(error => {
            console.log(error);
            res.status(500).json({msg: 'bad request'})
        })
})

// PassportJS.js
passport.use(
    new LocalStrategy(async(username, password, done)=>{
        try{
            const user = await User.findOne({ username: username })

            

            if(!user){
                console.log('Wrong username');
                return done(null, false, { message: "Incorrect username" });
            };

            const match = await bcrypt.compare(password, user.password);

            if(!match){
                console.log('wrong password');
                return done(null, false, { message: "Incorrect Password" });
            };
            console.log("User logged in successfully");
            return done(null, user);
        } catch(error){
            return done(error);
        }
    })
)

passport.serializeUser((user, done) =>{
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    }catch(error) {
        done(error);
    };
});

// log-in form
router.post('/users/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return res.status(500).json({ message: "Server error" });
      }
      if (!user) {
        return res.status(401).json({ message: "Incorrect username or password" });
      }
      
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({ message: "Server error" });
        }
        return res.status(200).json({
          message: 'Logged In',
          loggedUserName: user.username,
        });
      });
    })(req, res, next);
  });

  //AUTH STATUS
  router.get('/auth/status', (req, res) => {
    if(req.isAuthenticated()){
        res.status(200).json({ isAuthenticated: true, user: req.user });
    }else {
        res.status(200).json({ isAuthenticated: false });
      }
  })


  router.get("/auth/logout", (req, res, next) => {
    req.logOut(error => {
        if(error){
            return res.status(500).json({msg: 'error during logout'});
        }
        res.status(200).json({msg: 'logged out successfully'});
    })
  });
  
  router.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
  });
// sign-up form || REGISTER
router.post('/users/register', (req,res) =>{
    const body = req.body;
    
    bcrypt.hash(body.password, 10, async(err, hashedPassword) =>{
        if(err){
            console.log(err);
            return res.status(500).json({msg: 'Error hashing the password'});
        }
        try{
            const newUser = new User({
                username: body.username,
                password: hashedPassword,
                email: body.email
            })
    
            newUser.save()
                .then(savedUser =>{
                    res.status(200).json({
                        msg: 'saved successfully',
                        savedUser: savedUser.username
                    })
                })
                .catch(error =>{
                    console.log(error);
                    res.status(500).json({ msg: 'user already exists'})
                })
        }
        catch(error){
            console.log(error);
            res.status(500).json({msg: 'can not post'})
        }
    })
})

// CHANGE USER IMG
router.put('/users/:username', async (req, res) => {
    try {
      const username = req.params.username;
      const newProfilePic = req.body.profilePic;
      
      const updatedUser = await User.findOneAndUpdate({ username: username }, { profilePic: newProfilePic }, { new: true });
  
      res.send(updatedUser);
    } catch (err) {
      res.status(500).send(err);
    }
  });


module.exports = router;