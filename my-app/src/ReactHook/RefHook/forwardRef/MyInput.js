import React, { forwardRef } from "react";

// ver 1
// const MyInput = forwardRef((props , ref) => { 
//     return <input style={{
//         marginTop: '1%',
//         marginRight: '0.5%',
//     }} 
//     ref={ref}
//     />
// })
// export default MyInput;


//ver 2
const MyInput = (props , ref) => { 
    return <input style={{
        marginTop: '1%',
        marginRight: '0.5%',
    }} 
    ref={ref}
    />
}
export default forwardRef(MyInput);



//MyInput.js:3 Warning: forwardRef render functions accept exactly two parameters:
//                       props and ref. Did you forget to use the ref parameter?


// {/* 옛날 버전 forwardRef 지원하지 않는 경우 */}
// const MyInput = ({inputRef}) => { 
//     return <input style={{
//         marginTop: '1%',
//         marginRight: '0.5%',
//     }} 
//     ref={inputRef}
//     />
// }
// export default forwardRef(MyInput);