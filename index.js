const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/LoversDB')
.then(()=>{console.log('Database Connected')})
.catch((e)=>{console.log("Error message : ", e.message)})


const User = require('./schema');

app.get('/', (req,res)=>{
    res.render('home');
})

app.post('/', async(req, res)=>{
    const data = new User(req.body);
    await data.save()
    .then(()=>{console.log('Sent')})
    .catch((e)=>{console.log('Not Sent',e.message)})
    console.log(data);
    res.render('end');
})

app.listen(5000,()=>{
    console.log('Server is running');
})
