const express = require("express");
const app = express()
const port = process.env.PORT || 5000 ;
const cors = require("cors");

app.use(cors())

const category = require('./category.json')

app.get('/', (req, res)=>{
    res.send('assignment sevar')
})

app.get('/category', (req, res)=>{
    res.send(category);
})
 app.get('/category/:id', (req, res)=>{
    const id= req.params.id;
    const data = category.filter(d=>d.id==id)
  
    res.send(data)
 })

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})