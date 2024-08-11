import { useState, useEffect } from "react"
import axios from "axios";
import './Form.css'
function Form() {
    const [name, setName] = useState("")
    const [pass, setPass] = useState("");
    const [notes, setNotes] = useState([]);
    const [newTitle,setNewTitle] = useState("")
    useEffect(() => {
        axios.get("http://localhost:3005/fetch")
            .then((response) => {
                setNotes(response.data)
            })
    }, [notes])



    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3005/addtask", {
            title: name,
            notes: pass
        })
        setName("")
        setPass("")
    }

    const deleteNote = (id) => {
        axios.delete(`http://localhost:3005/delete/${id}`)
    }

    const updateNote = (id) =>{
        axios.put('http://localhost:3005/update',{
            id: id,
            newTitle:newTitle
        })
    }  

    return (
        <div>
            <form
                onSubmit={handlesubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "200px",
                    gap: "10px"
                }} >
                <label htmlFor="name">Title</label>
                <input value={name} placeholder="enter title" onChange={(e) => { setName(e.target.value) }} id='name' type="text" />
                <label htmlFor="pass">Notes</label>
                <textarea value={pass} placeholder="Your Notes Content" onChange={(e) => { setPass(e.target.value) }} />
                <button type="submit" >Submit</button>
            </form>
            <h3>Find Your Notes Here</h3>
            <div className="notes-container">
            {   
                notes.map((item, key) => (
                    <div className="note" key={key}>
                        <div style={{display:"flex",justifyContent:"right"}}>
                            <button onClick={() => deleteNote(item._id)}>Delete</button>
                            <button onClick={() => {updateNote(item._id)}} >Update</button>
                        </div>
                        <h1>{item.title}</h1>
                        <p>{item.notes}</p>
                        <b>Update Title</b>
                        <input required={true} onChange={(e)=>{setNewTitle(e.target.value)}} type="text" placeholder="enter new title" />
                    </div>
                ))
            }
            </div>
        </div>
    )
}
export default Form