import { useContext } from "react"
import GrandChild from "./GrandChild"
import { grandparentcontext } from "./GrandParent"
function Child(){
    const values = useContext(grandparentcontext);
    return(
        <>
            <h1>Child</h1>
            <ul>
                <li>Name : {values.name}</li>
                <li>Age : {values.age}</li>
            </ul>
            <GrandChild/>
        </>
    )
}
export default Child