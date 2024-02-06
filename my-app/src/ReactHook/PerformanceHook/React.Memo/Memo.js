import React, { useState } from "react";
import Child from "./component/Child";
import { Link } from 'react-router-dom'
const Memo = () => {
    const [parentAge, setParentAge] = useState(25)
    const [childAge, setChildAge] = useState(5);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1)
    }
    const incrementChildAge = () => {
        setChildAge(childAge + 1)
    }
    console.log('🤵부모👩‍🔧 컴포넌트가 렌더링 되었어요')
    return (
        <>
            <div style={{
                border: '2px solid navy',
                padding: '10px',
                textAlign: 'center',
                marginTop: '3%',
                marginLeft: '25%',
                width: '50%',
            }}>
                <h2>🤵부모👩‍🔧</h2>
                <p>age : {parentAge}</p>
                <button onClick={incrementParentAge}>부모 나이 증가</button>
                <button onClick={incrementChildAge}>자녀 나이 증가</button>
                <Child name={'홍길동'} age={childAge} />
            </div>
            <div style={{
                paddingTop: '20px',
                textAlign: 'center',
            }}>
                <hr></hr>
                <Link style={{
                    marginRight: '5px',
                    textDecoration: 'none',
                    color: 'gray',
                    fontWeight: 'bold',

                }}
                    to={"/MemoUsMemo"}>React.Memo + useMemo </Link>
                    <br></br>
                <Link style={{
                    marginRight: '5px',
                    textDecoration: 'none',
                    color: 'gray',
                    fontWeight: 'bold',

                }}
                    to={"/MemoUsCallback"}>React.Memo + useCallback </Link>
            </div>
        </>



    )
}
export default Memo;