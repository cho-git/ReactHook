import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom"
// state가 복잡할 경우 사용하기 좋은 useReducer
// state : 거래내역
// dispatch : state 업데이트를 위한 요구 
// action : 요구의 내용 "만원 출금해주세요"
// reducer : state 를 업데이트 하는 역할 "은행"
const ACTION_TYPE = {
    deposit: 'deposit',
    withdraw: 'withdraw',
};


const reducer = (state, action) => {
    console.log('reducer가 일을 합니다!', state, action)
    // switch (action.type) {
    //     case 'deposit':
    //         return state + action.payload;
    //     case 'withdraw':
    //         return state - action.payload;
    //     default:
    //         return  state;
    // } 방법 1
    switch (action.type) {
        case ACTION_TYPE.deposit:
            return state + action.payload;
        case ACTION_TYPE.withdraw:
            return state - action.payload;
        default:
            return state;
    }
}
// 방법 2 action.type 을 const 로 빼서 따로 관리 
// const ACTION_TYPE = {
//     deposit: 'asdasd',
//     withdraw: 'sdsdsax',
// };아무렇게 적어도 잘 작동된다'

const UsReducer = () => {
    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0);
    return (
        <div style={{ textAlign: 'center' }}>
            <h4>useReducer 은행</h4>
            <p> 잔고 : {money} 원</p>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                step="1000"
            />
            <button onClick={() => {
                // dispatch({ type: "deposit", payload: number })
                dispatch({ type: ACTION_TYPE.deposit, payload: number })
            }}>예금</button>
            <button onClick={() => {
                dispatch({ type: ACTION_TYPE.withdraw, payload: number })
            }}>출금</button>

            <div style={{
                paddingTop: '20px'
            }}>
                <Link
                    style={{
                        marginRight: '5px',
                        textDecoration: 'none',
                        color: 'pink',
                        fontWeight: 'bold',
                    }}
                    to="/UsReducerVer2"> UseReducer 심화</Link>
            </div>
        </div>
    )
}





// const UsReducer = () => {
//     const [state, dispatch] = useReducer(reducer, { age: 42 })
//     function reducer(state, action) {
//         console.log(state.age)
//         // if (action.type === 'incremented_age') {
//         //     return {
//         //         age: state.age + 1
//         //     };
//         // }else {
//         //   .../
//         // }                    밑과 같은 내용
//         switch(action.type){
//             case 'incremented_age':{
//                 return {
//                     age : state.age + 1
//                 };
//             };
//             case 'decresemented_age' :{
//                 return{
//                     age : state.age -1
//                 }
//             }
//         }
//         throw Error('unknown error', Error);
//     }
//     return (
//         <>
//             <button onClick={() => {
//                 dispatch({ type: 'incremented_age' })
//             }}> incremented_age</button>

//             <button onClick={() =>{
//                 dispatch({ type : 'decresemented_age'})
//             }}>decresemented_age </button>
//             <p>your age {state.age}</p>

//         </>
//     )

// }

export default UsReducer