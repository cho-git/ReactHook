import React, { useCallback, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
const UsCallback = () => {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);
    const someFunction = useCallback(() => {
        console.log(`someFunc : number : ${number}`);
        // debugger
        return;
    }, [number]);
    useEffect(() => {
        console.log('someFunction이 변경되었습니다.')
    }, [someFunction]); //number 를 바꾸면서 set 이 되기에 리렌더링 되면서
    // someFunction 의 주소가 바뀌기에 useEffect 가 호출 되는 것을 확인할 수 있다.
    useEffect(() => {
        console.log('렌더링 되었습니다.')
    })

    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>useCallback</h3>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <br />
            <button onClick={someFunction}>Call someFunction</button>
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
            <div style={{
                paddingTop: '20px'
            }}>
                <Link style={{
                    marginRight: '5px',
                    textDecoration: 'none',
                    color: 'pink',
                    fontWeight: 'bold',
                }}
                    to={"/UsCallbackVer2"}>useCallback v.2</Link>
            </div>
            <div style={{
                paddingTop: '20px'
            }}>
                <hr></hr>
                <h5
                    style={{
                        color: 'gray',
                        // paddingBottom:'10px'
                        padding: '20px 0 30px 0'
                    }}>useCallback 과 useMemo를 공부하고 React.Memo에 대해 알아보자</h5>
                <Link style={{
                    marginRight: '5px',
                    textDecoration: 'none',
                    color: 'green',
                    fontWeight: 'bold',
                }}
                    to={"/Memo"}>React.Memo </Link>
            </div>
        </div>
    )
}

export default UsCallback;