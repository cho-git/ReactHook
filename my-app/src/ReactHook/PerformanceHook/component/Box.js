import React, { useEffect, useState } from "react";

const Box = ({createBoxStyle}) =>{
    const [style , setStyle] = useState({});

    useEffect(()=> {
        console.log('박스 키우기');
        setStyle(createBoxStyle());
    },[createBoxStyle]);
    return (
        <div style={{...style ,
            position : 'absolute',
            marginLeft :'45%',
            marginTop  : '1%',
        } }></div>
    )
}

export default Box