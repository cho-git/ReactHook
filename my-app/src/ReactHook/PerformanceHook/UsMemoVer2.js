import React, { useEffect, useMemo, useState } from "react";

const UsMemoVer2 = () =>{
   const [number , setNumber] = useState(0);
   const [isKorea , setIsKorea] = useState(true);
//    1.
//    const location = isKorea ? '한국' : '외국';  

    //2. 
    //const location = {
    //     country : isKorea ? '한국' : '외국', 
    // }; 
    // 이렇게 했더니  location 은 변동 없이 number 만 바꿔주는데도 useEffect 가 호출되는 것을 확인
    // !여기서! 원시(Primitive) 타입과 객체(Object) 타입에 대해서 알아보자 Hook.txt useMemo 💡 중요 💡 참고
    // location 에 country 를 담는 주소가 할당되지만
    // number를 set 할 경우 새로 렌더링이 되면서 location 의 주소가 바뀌기 때문에 useEffect 가 계속해서 호출되고 있던 것이다.

    //3.
    const location = useMemo(() =>{
        return{
            country : isKorea ? '한국' : '외국', 
        }
    },[isKorea])

   useEffect(() =>{
    console.log('useEffect 호출')
    // 뭔가 오래걸리는 작업을 할 경우 useMemo 를 활용해서 꼭 필요한 경우에만 사용할 수 있다.
   },[location]) // location 값이 String 이 아닌 object 라면 어떻게 될까?
   
    return(
        <div id='top' style={{
            textAlign: 'center',
            paddingTop: '15px',
        }}>
            <h3>useMemo v.2</h3>
            <h4 style={{
                marginTop : '10px',
                marginBottom : '10px'
            }}> 하루에 몇 끼 먹어요??</h4>
            <input
            style={{
                marginBottom : '15px'
            }}
                type="number"
                value={number}
                onChange={(e) =>{
                    setNumber(e.target.value)
                }}
            />
            <hr/>
            <p style={{
                marginTop:'10px' , 
                marginBottom : '15px'
            // }}>나라 : {location}</p>   
         }}>나라 : {location.country}</p> 
            <button onClick={() => setIsKorea(!isKorea)}>비행기 탑승!</button>
        </div>
    )
}

export default UsMemoVer2;
