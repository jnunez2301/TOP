const express = require('express');
const router = express.Router();
const Messages = require('../../model/MessagesSchema');

router.get('/', (req, res) =>{
    Messages.find({})
    .then(msgs => {
        res.status(200).json(msgs);
    })
    .catch(error => {
        console.log(error);
        res.status(404).json({ msg: 'could not find the data' })
    })
})



module.exports = router;