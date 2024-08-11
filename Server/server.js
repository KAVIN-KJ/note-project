const mongoose = require('mongoose')
const express = require('express')
const app = express()
const NoteModel = require('./models/Note')
const cors = require('cors')
const url = `mongodb+srv://KJKR:kavin2004@cluster0.5wmry.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
app.use(cors())
app.use(express.json())

mongoose.connect(url)

app.get('/fetch', async (req, res) => {
    try{
        const result = await NoteModel.find({})
        res.send(result)
    }
    catch(err){
        console.log(err);
    }
})


app.post('/addtask',async (req,res)=>{
    const title = req.body.title
    const notes = req.body.notes
    const note = new NoteModel({title:title,notes:notes})
    try{
        await note.save()
        res.send("Saved Succesfully")
    }
    catch(err){
        console.log(err);
    }
})

app.delete('/delete/:id', async(req,res)=>{
    const id = req.params.id
    try{
        const deleted = await NoteModel.findByIdAndDelete(id);
        deleted ? res.send("Deleted Succesfully") : res.send("Deletion Falied")
    }catch(err){
        console.log(err);
    }
})


app.put('/update',async (req,res)=>{
    const id = req.body.id;
    const newTitle = req.body.newTitle;
    try{
        const note = await NoteModel.findById(id)
        note.title = newTitle
        note.save()
    }catch(err){
        console.log(err);
    }
})



app.listen(3005,()=>{
    console.log(`Server Hosted at http://localhost:${3005}`);
})