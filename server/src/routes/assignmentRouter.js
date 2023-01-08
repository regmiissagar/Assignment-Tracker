const { Router } = require('express');
const Assignment = require('../models/assignment')
const app = Router();

app.post('/assignment', async(req, res)=>{
    try{
        // res.send(req.body)
        const data = await Assignment.create(req.body)
        if(data){
            res.json({
                msg: "The new Task has been uploaded"
            })
        }else{
            res.json({
                msg: "something went wrong"
            })
        }
    }catch(err){
        console.log(err)
    }
})

app.get('/assignment', async(req, res)=>{
    try{
        const assignmentData = await Assignment.find()
        console.log(assignmentData)
        if(assignmentData){
            res.json({
                AssignmentsList: assignmentData
            })
        }
        
    }catch(err){
        console.log(err)
    }
})

module.exports = app;