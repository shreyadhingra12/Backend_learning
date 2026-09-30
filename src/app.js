//server ko create karna
const express = require("express"); //express ek function/library hai jo Express.js framework se milta hai.

const app = express(); //Ye tumhe ek Express application object deta hai.
app.use(express.json()); //middleware
const notes = [];
/*
koi data bhej rahe jese ki title and description
*/
app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "note created successfully",
  });
});
//Get methord / notes
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "note fetched successfully",
    notes: notes,
  });
});
//delete /notes/:1
app.delete('/notes/:index',(req,res)=>{

    const index = req.params.index//req param req http 2 ways body or param  body is for post in url ?->param(dictionary or object)

    delete notes[index]

    res.status(200).json({
        message: "note delete successfully"
    })
})
module.exports = app; //isse ham app(jo ki server ka instance h) ko export karte h
