import React, { useEffect, useRef, useState } from "react";

const UsRefVer1_3 = () => {
    const [count, setCount] = useState(1);
    // const [renderCount , setRenderCount] = useState(1);
    const renderCount = useRef(1)
    useEffect(() => {
        console.log('🎈렌더링🎈 : ', renderCount.current)
        renderCount.current = renderCount.current + 1
    }) 
    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>useRef v.1.3</h3>
            <p> count : {count}</p>
            <button onClick={() => setCount(count + 1)}> 올려 </button>
        </div>
    )
}

export default UsRefVer1_3