import React, { useState } from "react";
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import './UsContext.css';

const UsContext = () => {

    const [isDark, setIsDark] = useState(false);
    return (
        //  ThemeContext.Provider 가 감싸는 모든 컴포넌트에서 isDart 와 setIsDart에 접근 가능
        <ThemeContext.Provider value={{ isDark, setIsDark }}> 
            <Page />
        </ThemeContext.Provider>
    )
}

export default UsContext