const express = require('express');
const members = require('../../members')
const uuid = require('uuid')
const router = express.Router();

//Gets All Members
router.get('/', (req, res) => { res.json(members) })

//Get Single Mermber
router.get('/:id', (req, res) =>{
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({msg: `Member with the id ${req.params.id} not found`});
    }
})
// Create Member
router.post('/', (req, res) =>{
    const newMeber = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if(!newMeber.name || !newMeber.email){
        return res.status(400).json({msg: 'Please include a name and email'})
    }
    members.push(newMeber);
    res.json(members);
    /* res.redirect('/'); */
})

//Update Meber
router.put('/:id', (req, res) =>{
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name ;
                member.email = updMember.email ? updMember.email : member.email;
            }
            res.json({ msg: 'Member updated', member })
        })
    }else{
        res.status(400).json({msg: `Member with the id ${req.params.id} not found`});
    }
})

router.delete('/:id', (req, res) =>{
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        res.json({
            msg: 'Member deleted',
            members: members.filter(member => member.id !== parseInt(req.params.id))
        })
    }else{
        res.status(400).json({msg: `Member with the id ${req.params.id} not found`});
    }
})
module.exports = router;