import { useContext } from "react"
import { grandparentcontext } from "./GrandParent"
function GrandChild(){
    const values = useContext(grandparentcontext)
    return(
        <>
            <h1>Grand Child</h1>
            <p>
                name : {values.name}
                <br/>
                age : {values.age}
            </p>
        </>
    )
}
export default GrandChild