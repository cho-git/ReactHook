import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Header =() =>{
    const {isDark} =useContext(ThemeContext);
    // const user =useContext(UserContext);
    const {user} = useContext(UserContext);
    console.log(isDark)
    return(
        <header
        className="header"
        style={{backgroundColor : isDark ? 'black' : 'lightgray',
        color : isDark ? 'white' :'black',
    }}
        >
            <h2>Dark mode Context Welcome {user}!</h2>
        </header>
    )
}

export default Header;