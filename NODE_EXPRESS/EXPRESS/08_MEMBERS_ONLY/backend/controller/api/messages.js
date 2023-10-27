const express = require('express');
const router = express.Router();
const Messages = require('../../model/MessagesSchema');
const User = require('../../model/UsersSchema');

router.get('/', (req, res) => {
    User.find({})
        .then(msgs => {
            res.status(200).json(msgs);
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({ msg: 'could not find the data' })
        })
})



router.post('/register', (req,res) =>{
    const body = req.body;
    console.log(body);
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