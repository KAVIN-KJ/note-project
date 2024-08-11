import { useContext } from "react"
import {themeContext} from './Themes'
function Toolbar(){
    const usedcontext = useContext(themeContext)
    return(
       <>
            <button onClick={usedcontext.toggleTheme}>Toggle</button>
       </>
    )
}   
export default Toolbar