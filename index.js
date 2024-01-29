const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config({
    path:"./.env"
})

const PORT = process.env.PORT;

app.use(express.json());
app.use(
    cors({
        origin:"https://wait-chi.vercel.app/Contact",
    })
)

const User = mongoose.Schema({
    name:String,
    email:String,
    message:String
})

const Handleuser = mongoose.model("message",User);



require('./DB/connect');


app.post('/Contact',async (req,res)=>{
    const {name,email,message} = req.body;
    const postman = await Handleuser.create({name,email,message});
    await postman.save();
    return postman;
});

app.get('/',(req,res)=>{
    res.send('hello from server');
})



app.listen(PORT)
