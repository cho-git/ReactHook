import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
const UsRef = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);



    console.log('🎈렌더링🎈')
    console.log(countRef)  // current : 0


    const increaseCountState = () => {
        setCount(count + 1); //React 에서 state 가 변경되면 컴포넌트가 다시 렌더링 된다
    }
    const increaseCountRef = () => {
        countRef.current = countRef.current + 1
        console.log('Ref : ', countRef.current) // Ref 올려 버튼을 올려도 값은 올라가지만 
    }                                           //      렌더링은 되지 않는다 값은 누적 저장됨

    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>useRef</h3>
            <p>State : {count}</p>
            <p>Ref : {countRef.current}</p>
            <button onClick={increaseCountState}>State 올려</button>
            <button onClick={increaseCountRef}>Ref 올려</button>
            <div style={{
                paddingTop: '20px'
            }}>
                <div>
                    <Link style={{
                        marginRight: '5px',
                        textDecoration: 'none',
                        color: 'pink',
                        fontWeight: 'bold',
                    }}
                        to={"/UsRefVer1_1"}>useRef v.1.1 |</Link>
                    <Link style={{
                        marginRight: '5px',
                        textDecoration: 'none',
                        color: 'pink',
                        fontWeight: 'bold',
                    }}
                        to={"/UsRefVer1_2"}>useRef v.1.2 |</Link>
                    <Link style={{
                        marginRight: '5px',
                        textDecoration: 'none',
                        color: 'pink',
                        fontWeight: 'bold',
                    }}
                        to={"/UsRefVer2"}>usRef v.2</Link>
                    <div style={{
                        marginRight: '13%',
                        marginTop : '2%'
                    }}>
                        <Link style={{
                            marginRight: '5px',
                            textDecoration: 'none',
                            color: 'gray',
                            fontWeight: 'bold',
                        }}
                            to={"/ForwardReff"}>forwardRef</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UsRef;