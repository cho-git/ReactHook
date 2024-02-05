import React, { useEffect, useState } from "react";

const Timer = (props) => {

    useEffect(() =>{
        const timer = setInterval(()=>{
            console.log('타이머 째깍째깍');
        },1000);

        return () =>{
            //... 
            clearInterval(timer);
            console.log('타이머 종료')
        }
    },[])

    return (
        <>
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>useEffect v1.1</h3>
        </div>
        <div>
            <span style={{
                position: 'absolute',
                marginTop : '5%',
                paddingLeft : '40%',
                width : '100%',
            }}>타이머를 시작합니다 . 콘솔을 보세요!</span>
        </div>
        </>
    )
}

export default Timer;