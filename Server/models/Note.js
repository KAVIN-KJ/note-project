const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    notes:{
        type:String,
        required:false
    }
})

const Note = mongoose.model('Note',NoteSchema)

module.exports = Note