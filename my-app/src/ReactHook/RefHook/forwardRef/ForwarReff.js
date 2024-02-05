import React, { useRef } from "react";
import MyInput from "./MyInput";

const ForwardReff = () => {
    const inputRef = useRef(null);

    const focus = () => {
        inputRef.current.focus();
    }
    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>

            <h3>forwardRef</h3>
            {/*  MyInput 컴포넌트 생성 전 */}
            {/* <input ref={inputRef}    
                style={{
                    marginTop: '1%',
                    marginRight: '0.5%',
                }} /> */}
            <MyInput ref={inputRef} />
            {/* 옛날 버전 forwardRef 지원하지 않는 경우 */}
            {/* <MyInput inputref={inputRef} /> */}
            <button onClick={focus}>집중</button>
        </div>
    )
}

export default ForwardReff