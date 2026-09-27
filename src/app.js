//server ko create karna
const express = require("express")//express ek function/library hai jo Express.js framework se milta hai.


const app = express()//Ye tumhe ek Express application object deta hai.

const notes=[]
/*
koi data bhej rahe jese ki title and description
*/ 
app.post('/notes',(req,res)=>{
    console.log(req.body)
})
module.exports = app //isse ham app(jo ki server ka instance h) ko export karte h