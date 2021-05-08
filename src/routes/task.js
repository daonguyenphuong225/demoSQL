const express = require('express');
const route = express.Router();
const path = require('path')
const {Task} = require('../controller')

route.get('/task',async(req,res)=>{
    const query = req.query;
    console.log(query);
    const data = await Task.getTask(query);
    res.json(data)
})

route.post('/task',async(req,res)=>{
    const body = req.body;
    console.log(body);
    const data = await Task.createTask(body);
    res.json({data});
})

route.put('/task',async(req,res)=>{
    const body = req.body;
    console.log(body);
    const data = await Task.updateTask(body);
    res.json({data});
})
module.exports = route;