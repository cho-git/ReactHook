import React, { memo } from "react";

const ChildUsCallback = ({ name }) => {
    console.log('🙅‍♂️자녀🙅‍♀️ 컴포넌트도 렌더링 되었네요')
    return (
        <div style={{
            border: '2px solid powderblue',
            padding: '10px',
            textAlign: 'center',
            marginTop: '3%',
            marginLeft: '25%',
            marginBottom: '20px',
            width: '50%',
        }}>
            <h3>🙅‍♂️자녀🙅‍♀️</h3>
            <p>성 : {name}</p>
        </div>
    )
}

export default memo(ChildUsCallback);

