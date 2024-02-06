import React, { memo } from "react";

const Child = ({ name, age }) => {
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
            <p>name : {name}</p>
            <p>age : {age}</p>
        </div>
    )
}

export default memo(Child);

// 리액트에서 제공하는 고착 컴포넌트
// 렌더링이 될 상황이 놓일 때마다 Props check 
// 컴포넌트가 받는 Props 에 변화가 있을 시에만 Rendering 을 허용
// 없을 시 렌더링을 하지 않고 이전에 이미 렌더링 된 화면을 재사용
