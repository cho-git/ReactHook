import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Content = () => {
    const { isDark } = useContext(ThemeContext);
    const { user, setUser } = useContext(UserContext);
    const [userText, setUserText] = useState('')
    // const user = useContext(UserContext)
    const UserChange = () => {
        console.log('UserChange')
        setUser(userText)
    }
    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : "black"
            }}>
            <div id="userText">
                <input
                    placeholder="이름을 입력해주세요"
                    onChange={(e) => setUserText(e.target.value)}
                ></input>
                <button
                    onClick={UserChange}
                >확인</button>
            </div>
            <div>
                <p>hi {user}</p>
            </div>
        </div>
    )
}
export default Content;