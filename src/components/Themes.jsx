import { useContext, createContext, useState } from 'react';
import Toolbar from './Toolbar.jsx'
import './Themes.css'

export const themeContext = createContext();
function Themes(){

    const [theme,setTheme] = useState('light');
    
    const toggleTheme = () => {
        if(theme==='light') setTheme('dark')
        else setTheme('light')
    }
    return(
        <themeContext.Provider value={{theme,toggleTheme}}>
                <h1>{theme}</h1>
                <Toolbar/>
        </themeContext.Provider>
    )
}
export default Themes