const express = require('express');
const router = express.Router();
const Messages = require('../../models/Messages')

//Get the database
router.get('/', (req, res) =>{
    Messages.find({})
    .then(msgs => {
        res.status(200).json(msgs);
    })
    .catch(error => {
        console.error(error);
        res.status(404).json({msg: 'An error ocurred'})
    })    
})
//Get a request by user
router.get('/:user', (req, res) =>{
    const user = req.params;
    Messages.find(user)
    .then(usr => {
        res.status(200).json(usr);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({msg: 'bad request'})
    })
})

router.post('/', (req, res) =>{
    const newMessage = new Messages({
        text: req.body.text,
        user: req.body.user,
    })

    newMessage.save()
        .then(savedMessage => {
            res.json({ 
                success: true, 
                message: 'Message saved successfully',
                savedMessage: savedMessage
            });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ success: false, error: 'An error occurred while saving the message' });
        });
   
})

/* 


router.get('/:user', (req, res) =>{
    const currentUser = req.params.user;
    const userExists = messages.some(msg => msg.user === currentUser);

    if(userExists){
        res.json(messages.filter(msg => msg.user === currentUser))
    }else{
        res.status(400).json({msg: `Member with the username ${currentUser} not found`})
    }
}) 
*/



module.exports = router;