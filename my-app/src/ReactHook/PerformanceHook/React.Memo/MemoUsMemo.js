import React, { useMemo, useState } from "react";
import ChildUsMemo from "./component/ChildUsMemo";
const MemoUsMemo = () => {
    const [parentAge, setParentAge] = useState(25)

    const incrementParentAge = () => {
        setParentAge(parentAge + 1)
    }

    console.log('🤵부모👩‍🔧 컴포넌트가 렌더링 되었어요')
    const name = useMemo(() => {
        return {
            lastName: '홍',
            firstName: '길동',
        };
    },[])
    // const name = {
    //     lastName: '홍',
    //     firstName: '길동',
    // }
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
            <ChildUsMemo name={name} />
        </div>
    )
}
export default MemoUsMemo;

//  ChildUsMemo를 memo로 감싸주엇지만 부모 , 자녀 콘솔이 모두 출력되는것을 확인 할 수 있다.
// 함수가 호출 될 떄는 함수 안에 있는 모든 변수가 초기화 되기 때문에
//          >> 1. incrementParentAge 클릭 >> 2. set 되기떄문에 렌더링  >> 3.렌더링 되면서 주소값이 변경
// Object 안에 있는 주소 값이 계속 바뀌기 댸문에 memo 로 감싸진 ChildUsCallback 도 계속 렌더링이 되는것이다.