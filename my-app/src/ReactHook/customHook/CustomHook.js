// 내가 직접 만드는 ReactHook
import React, { useState } from "react";
import { useInput } from "./useInput";
import { Link } from "react-router-dom";

function displayMessage(message) {
    alert(message)
}

const CustomHook = () => {

    const [inputValue, handleChange, handleSubmit] = useInput("Hi Cho", displayMessage)

    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingBottom: '10px',
            paddingTop: '15px',
        }}>
            <h3>CustomHook</h3>
            <hr style={{ marginTop: '15px' }}></hr>
            <h5>useInput</h5>
            <input value={inputValue} onChange={handleChange} />
            <button style={{ marginTop: '15px' }} onClick={handleSubmit}>확인</button><p></p>
            <Link style={{
                marginRight: '5px',
                textDecoration: 'none',
                color: 'green',
                fontWeight: 'bold',
            }}
                to={"/CustomHook2"}>CustomHook2 </Link>
        </div>
    )
}

export default CustomHook;