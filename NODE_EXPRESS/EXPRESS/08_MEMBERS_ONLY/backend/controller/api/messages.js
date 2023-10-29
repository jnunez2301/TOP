const express = require('express');
const router = express.Router();
const Messages = require('../../model/MessagesSchema');
const User = require('../../model/UsersSchema');
//PassportJS
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;




router.get('/', (req, res) => {
    User.find({})
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({ msg: 'could not find the data' })
        })
})

router.get('/user/:username', (req, res) =>{
    const userParam = req.params.username;

    User.find({username: userParam})
        .then(msg => 
            {
                res.status(200).json(msg)
            }
            )
        .catch(error => {
            console.log(error);
            res.status(500).json({msg: 'bad request'})
        })
})



router.post('/register', (req,res) =>{
    const body = req.body;
    
    try{
        const newUser = new User({
            username: body.username,
            password: body.password,
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
                res.status(500).json({ msg: 'bad request'})
            })
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg: 'can not post'})
    }
})


/* 
router.post('/', (req, res) => {
    const body = req.body;
    try {
        const newMessages = new Messages({
            user: body.user,
            password: body.password,
            email: body.email,
            messages: [...messages, {
                title: body.title,
                description: body.description,
            }]
        })

        newMessages.save()
            .then(savedMessage => {
                res.status(200).json({
                    msg: 'saved successfully',
                    savedMessage: savedMessage
                })
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ msg: 'bad request' })
            })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'bad request' })
    }
}) */


module.exports = router;