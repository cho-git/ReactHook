import React, { useRef, useState } from "react";

const UsState = () => {
    const [age, setAge] = useState(20)
    const [name, setName] = useState('Cho')
    const handleClick = () => {
        setAge(a => a + 1)
        setName('CHO')
        console.log(name, age) // Still "Cho" !!!
    }
    return (
        <div style={{textAlign:'center'}}>
            <h2>useState 연습장입니다.</h2>
            {name} , {age} <p></p>
            <button onClick={handleClick}>button</button>
        </div>
    )
}

//                  중요 💡
// set 함수를 호출해도 이미 실행중인 코드의 state 는 변경되지 않습니다.!
// set 함수는 다음 렌더링에서 반환할 useState에만 영향을 줍니다.
export default UsState