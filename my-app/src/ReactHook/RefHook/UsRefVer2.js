import React, { useEffect, useRef } from "react";

// useRef 에 직접 접근하는 방법에 대해 알아보자
// 접근하고자 하는 태그에 ref 속성을 넣어보자
// ex ) const ref = useRef(value);
//          <input ref= {ref}/>;
// 로그인 화면에 들어왔을 떄 <input text 박스>를 마우스로 클릭하지 않아도
// 자동으로  focus 상태가 되도록 해보자
const UsRefVer2 = () => {
    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef); // 1.{current : undefined} 2. ref={inputRef} 추가하면 {current : input} 
        inputRef.current.focus();
    }, [])
    const login = () =>{
        alert(`환영합니다 ${inputRef.current.value}!`)
        inputRef.current.focus();
    }
    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>useRef v.2</h3>
            <input ref={inputRef} type="text" placeholder="username" />
            <button onClick={login}>로그인</button>
        </div>
    )
}

export default UsRefVer2;