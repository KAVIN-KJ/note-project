import { createContext } from "react"
import Parent from "./Parent"

export const grandparentcontext = createContext()
function GrandParent(){
    const name = 'John Carter'
    const age = 75
    return(
        <grandparentcontext.Provider value={{name,age}}>
            <h1>
                GrandParent
            </h1>
            <p>
                Name : {name}
                age : {age}
                <Parent/>
            </p>
        </grandparentcontext.Provider>
    )
}
export default GrandParent