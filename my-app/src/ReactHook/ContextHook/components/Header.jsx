import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header =() =>{
    const {isDark} =useContext(ThemeContext);
    console.log(isDark)
    return(
        <header
        className="header"
        style={{backgroundColor : isDark ? 'black' : 'lightgray',
        color : isDark ? 'white' :'black',
    }}
        >
            <h2>Dark mode Context</h2>
        </header>
    )
}

export default Header;