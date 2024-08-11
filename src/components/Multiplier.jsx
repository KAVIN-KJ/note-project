import { useState } from "react"

export default function Multiplier(){
    const [num,setNum] = useState()
    const [result,setresult] = useState(0)
    return(
        <>  
            <h1>{result}</h1>
            <input type="number" onChange={(e)=>{setNum(e.target.value)}}/>
            <button onClick={()=>{setresult(num*num)}}>Square</button>
        </>
    )
}