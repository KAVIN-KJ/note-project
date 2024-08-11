import { useState } from "react"
import "./Counter.css"
function Counter(){
    const [count,setCount] = useState(0);
    return(
        <>
        <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Add</button>
            <button onClick={()=>{setCount(count-1)}} >Subtract</button>
        </>
    )
}
export default Counter
