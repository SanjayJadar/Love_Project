const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://sanjayjadar53:VD2Ardjzr4tIekON@portfolio.76hvi7e.mongodb.net/LoversDB?retryWrites=true&w=majority')
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
    if(data){
        res.render('end');
    }
})

app.listen(5000,()=>{
    console.log('Server is running');
})
