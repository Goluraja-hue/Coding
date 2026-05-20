const express = require("express");


const app =  express();   // server instance ko create karna 

app.get('/',(req,res)=>{
    res.send("Hello Golu ji!");
})

app.get('/About',(req,res)=>{
    res.send("Golu aap about page par aa chuke hai.");
})


app.get('/Home',(req,res)=>{
    res.send('Golu abhi aap home page pe hai')
})

app.listen(3000);  // server ko start karna