const mongoose = require('mongoose');

const link = process.env.DBLINK;


mongoose.connect(link)
 .then(()=>{
    console.log('connection established');
 })
 .catch((err)=>{
    console.log(err);
 })