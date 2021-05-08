const express = require('express');
const route = express.Router();
const path = require('path')
const {User} = require('../controller')

route.get('/user',async(req,res)=>{
    const query = req.query;
    console.log(query);
    const data = await User.getUser(query);
    res.json(data)
})
route.post('/user',async(req,res)=>{
    const body = req.body;
    console.log(body);
    const data = await User.createUser(body);
    res.json({data});
})

route.put('/user',async(req,res)=>{
    const body = req.body;
    console.log(body);
    const data = await User.updateUser(body);
    res.json({data});
})





route.delete("/user/:userId",async (req,res) =>{
    const userId = req.params.userId;
    console.log(userId);
    const data = await User.deleteUser(userId);
    res.json({data});
})
module.exports = route;