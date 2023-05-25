const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nithinkaippadamala:nithin@cluster0.ibmsw01.mongodb.net/");

app.use(express.static('public'));

app.set('view engine','ejs');

app.use(express.json())
app.use(express.urlencoded({extended:true}))


//for user routes
const userRoute =require('./routes/userRoute');

app.use('/',userRoute);

//for admin routes
const adminRoute =require('./routes/adminRoute');

app.use('/admin',adminRoute);

app.listen(3000,function(){
    console.log("server is running ...");
}); 