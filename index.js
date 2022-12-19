const express = require("express");
const app = express()
const port = process.env.PORT || 5000 ;
const cors = require("cors");

app.use(cors())

const category = require('./category.json');
const tutorial = require("./tutorial.json");

app.get('/', (req, res)=>{
    res.send('assignment sevar')
})

app.get('/category', (req, res)=>{
    res.send(category);
})
 app.get('/category/:id', (req, res)=>{
    const id= req.params.id;
    const data = tutorial.filter(cd=>cd.id==id)
  
    res.send(data)
 })
 //check server side

 app.get('/tutorial', (req, res)=>{
    res.send(tutorial)
 })
 app.get("/tutorial/:id", (req, res)=>{
    const id= req.params.id;
    const tutorialData = tutorial.filter(singleData =>singleData.tutorial_id == id)

    res.send(tutorialData)
 })

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})