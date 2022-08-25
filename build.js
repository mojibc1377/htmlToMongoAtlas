const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { text } = require('body-parser');
const dotenv = require("dotenv")

app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb+srv://moji:Mojtaba1377@cluster0.ecnqdbp.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true},{useUnifiedTopology:true})

//create a new data schema
const notesSchema = {
       name: {type: String, required: true},
       amountInput :{Number},
       phone: {type: Number, required: true},
       address: {type: String, required: true},
       role: {type: String, required:true},
       feel: {type: String, required:true},
       prefer: {type: String, required:true},
       feedback: {type: String, required:false},
}
const Note = mongoose.model("Note", notesSchema)


app.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html').se
})

app.post('',function(req, res){
    let newNote = new Note({
        name : req.body.name,
        amountInput : req.body.amountInput,
        phone : req.body.phone,
        address : req.body.address,
        role : req.body.role,
        feel : req.body.feel,
        prefer : req.body.prefer,
        feedback : req.body.feedback

    });
    newNote.save();
    res.redirect('/');
})



app.listen(process.env.PORT, function(){
    console.log('server running on port 3000');
})