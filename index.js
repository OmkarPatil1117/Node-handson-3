const express = require("express");

const app = express();

const middleware = (req,res,next)=>{
    console.log("Midddleware");
    console.warn("current route is", req.originalUrl);
    next();
}

app.get('/', (req,res)=>{
    res.send('This is my HomePage')
})

app.get('/about', middleware,(req,res)=>{
    console.log('This is About');
    res.send("This is My About Page")
})

app.listen(8000, ()=>{
    console.log("Started")
})