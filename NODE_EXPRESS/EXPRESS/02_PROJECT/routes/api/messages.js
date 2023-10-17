const express = require('express');
const router = express.Router();
const messages = require('../../messages')
const uuid = require('uuid');

router.get('/', (req, res) =>{
    res.json(messages)
})

router.get('/:user', (req, res) =>{
    const currentUser = req.params.user;
    const userExists = messages.some(msg => msg.user === currentUser);

    if(userExists){
        res.json(messages.filter(msg => msg.user === currentUser))
    }else{
        res.status(400).json({msg: `Member with the username ${currentUser} not found`})
    }
})

/* {
        "text": "Hi there!",
        "user": "Amando",
        "added": "2023-10-16T17:21:08.004Z"
    }, */
router.post('/', (req, res) =>{
    const newMessage = {
        text: req.body.text,
        user: req.body.user,
        added: Date(),
    }
    if(!newMessage.text || !newMessage.user){
        return res.status(400).json({msg: 'please include a text and user'})
    }else{
        messages.push(newMessage);
        /* res.json(messages) */
        res.redirect('/')
    }
})


module.exports = router;