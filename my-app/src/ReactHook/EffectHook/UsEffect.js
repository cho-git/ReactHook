import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
const UsEffect = () => {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');
    const handleCountUpdate = () => {
        setCount(count + 1);
    }
    const handleInputChange = (e) => {
        setName(e.target.value);
    }
    // 렌더링 될때마다 매번 실행 (state 가 업데이트 되면 렌더링 된다 . useState 부분 참고) [] 빈배열일 경우
    // [count] 일경우 첫 마운트 떄와 handleCountUpdate 을 통해 state 가 변할 떄 렌더링 된다
    // useEffect(() =>{
    //     console.log ('맨처음 🎀렌더링🎀')
    // },[]);
    // useEffect(() =>{
    //     console.log ('계속 🎀렌더링🎀')
    // });
    // useEffect(() =>{
    //     console.log ('name 🎀렌더링🎀')
    // },[name]);
    useEffect(() => {
        console.log('count 🎀렌더링🎀')
    }, [count]);
    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>useEffect</h3>
            <button
                style={{ marginRight: '10px ' }}
                onClick={handleCountUpdate}>update</button>
            <span>count : {count}</span>

            <div style={{ marginTop: '10px' }}>

                <input
                    style={{
                        width: '20%',
                        marginRight: '5%'
                    }}
                    type="text" value={name} onChange={handleInputChange} />
                <span>name : {name}</span>
            </div>
            <div style={{
                paddingTop: '20px'
            }}>
                <Link style={{
                    marginRight: '5px',
                    textDecoration: 'none',
                    color: 'pink',
                    fontWeight: 'bold',
                }}
                    to={"/UsEffectVer1_1"}>UsEffect v.1.1</Link>
            </div>
        </div>
    )
}

export default UsEffect