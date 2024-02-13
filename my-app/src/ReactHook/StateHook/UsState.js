import React, { useRef, useState } from "react";

const UsState = () => {
    const [age, setAge] = useState(20)
    const [name, setName] = useState('cho')
    const handleClick = () => {
        setAge(a => a + 1)
        setName('CHO')
        console.log(name, age) // Still "cho" !!!
    }
    const handleClick2 = () => {
        setAge(a => a + 1)
        setName('cho')
        console.log(name, age) // Still "CHO" !!!
    }
    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingBottom: '10px',
            paddingTop: '15px',
        }}>
            <h3>useState 연습장입니다.</h3>
            {name} , {age} <p></p>
            <button onClick={handleClick}>button</button>
            <button onClick={handleClick2}>button2</button>
        </div>
    )
}

//                 💡 중요 💡
// set 함수를 호출해도 이미 실행중인 코드의 state 는 변경되지 않습니다.!
// set 함수는 다음 렌더링에서 반환할 useState에만 영향을 줍니다.
export default UsState