import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
const UsRefVer1_2 = () => {
    const [renderer, setRenderer] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;

    const doRendering = () => {
        setRenderer(renderer + 1)
    }

    const increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log('ref : ', countRef.current)
    }

    const increaseVar = () => {
        countVar = countVar + 1;
        console.log('var : ' + countVar);
    }
    // 렌더! 버튼을 통해 Ref 값을 불러왓지만 Var 값은 변화가 없음
    // Var 값은 함수가 불리면서 컴포넌트 내 countVar 값은 0으로 초기화 되기 떄문에 Var 올려 버튼을 아무리 누르고
    // 렌더 ! 버튼을 누르면 0이기에 변화가 없다
    // 하지만 ref 렌더링이 되어도 값을 유지한다.
    // ref 값은 컴포넌트 전 생의 주기를 통해 유지가 된다 .
    // 마운트 된 시점부터 마운트 해제 될떄까지 같은 값을 유지할 수 있다
    const printResults = () => {
        console.log(`ref: ${countRef.current}, var : ${countVar}`)
    }
    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>useRef v.1.1</h3>
            <p>Ref : {countRef.current}</p>
            <p>Var : {countVar}</p>
            <button onClick={doRendering}>렌더!</button>
            <button onClick={increaseRef}>Ref 올려</button>
            <button onClick={increaseVar}>Var 올려</button>
            <button onClick={printResults}>Var Ref 출력</button>
            <div style={{
                paddingTop: '20px'
            }}>
                <Link style={{
                    marginRight: '5px',
                    textDecoration: 'none',
                    color: 'pink',
                    fontWeight: 'bold',
                }}
                    to={"/UsRefVer1_3"}>usRef v.1.3</Link>
            </div>
        </div>
    )
}


export default UsRefVer1_2