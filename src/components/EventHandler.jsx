import { useState } from "react"

export default function EventHandler(){
    const [text,setText] = useState("");
    const [output,setOutput] = useState("");
    return(
        <>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
            <button onClick={()=>{setOutput(text);setText("")}}> Submit </button>
            <h1>Your Input : {output}</h1>
        </>
    )
}
