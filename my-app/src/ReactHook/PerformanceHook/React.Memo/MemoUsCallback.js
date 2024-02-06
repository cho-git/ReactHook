import React, { useCallback, useState } from "react";
import ChildUsCallback from "./component/ChildUsCallback";
const MemoUsCallback = () => {
    const [parentAge, setParentAge] = useState(25)

    const incrementParentAge = () => {
        setParentAge(parentAge + 1)
    }

    console.log('🤵부모👩‍🔧 컴포넌트가 렌더링 되었어요')
    // const tellMe = () =>{
    //     console.log('길동아 ~~~~~')
    // } >> incrementParentAge 가 불리면서 set 되고 리렌더링이 되기 떄문에 함수형 컴포넌트인 tellMe 가 메모리 주소를
    // 다시 할당 받게 되고 자식 컴포넌트인 ChildUsCallback 도 같이 렌더링된다.
    
        const tellMe = useCallback(() =>{
        console.log('길동아 ~~~~~')
    },[]);
    return (
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
            <ChildUsCallback name={"홍길동"} tellMe={tellMe} />
        </div>
    )
}
export default MemoUsCallback;
