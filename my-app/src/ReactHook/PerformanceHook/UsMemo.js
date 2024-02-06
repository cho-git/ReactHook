import React, { useMemo, useState } from "react";
import { Link } from 'react-router-dom'
const hardCalculate = (number) => {
    console.log('어려운 계산!');
    console.time('timer') 
    for (let i = 0; i < 999999999; i++) { } // 생각하는 시간
    console.timeEnd('timer') //0.5 초 500ms
    return number + 10000;
}
const easyCalculate = (number) => {
    console.time('timer')
    console.log('쉬운 계산!');
    console.timeEnd('timer') //0.0005초
    return number + 1;
} 
// 쉬운 계산기를 사용해봤지만 useState 떄문에 UsMemo 컴포넌트가 새로 렌더링이 되기 떄문에
//    hardSum 과  easySum 이 모두 초기화가 되면서 hardCalculate 가 다시 불려지게 된다.
//    그러면서 for (let i = 0; i < 999999999; i++) { } // 생각하는 시간만큼의 시간이 걸리기 떄문에 비효율적이다
//    해결하기위해 easySum 만 불렷을때는 hardCalculate 가 불리지 않게하는 방법을 사용하기위해
//    useMemo를 사용해보자 >>>2. 로 이동


const UsMemo = () => {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);
    // const hardSum = hardCalculate(hardNumber); // 1.첫번째 생각하는 시간을 체감위해 사용
    // 2. useMemo 를 사용해보자
    const hardSum = useMemo(() => {
        return hardCalculate(hardNumber);
    }, [hardNumber]);
    const easySum = easyCalculate(easyNumber);
    return (

        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>useMemo</h3>
            <h4>어려운 계산기</h4>
            <input
                type="number"
                value={hardNumber}
                onChange={(e) => setHardNumber(parseInt(e.target.value))}
            />
            <span> + 10000 = {hardSum}</span>

            <h4>쉬운 계산기</h4>
            <input
                type="number"
                value={easyNumber}
                onChange={(e) => setEasyNumber(parseInt(e.target.value))}
            />
            <span> + 1 = {easySum}</span>
            <div style={{
                paddingTop: '20px'
            }}>
                <Link style={{
                    marginRight: '5px',
                    textDecoration: 'none',
                    color: 'pink',
                    fontWeight: 'bold',
                }}
                    to={"/UsMemoVer2"}>useCallback v.2</Link>
            </div>
        </div>
    )
}

export default UsMemo;