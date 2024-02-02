import React from "react";

const Student = ({ name , dispatch , id , isHere, ACTION_TYPE}) => {

    return (
        <div>
            <span style={{
                textDecoration: isHere ? 'line-through' : 'none',
                color : isHere ? 'gray' : 'black',
            }}
            onClick={()=>{
                dispatch({type :ACTION_TYPE.mark_student, payload : {id}})
            }}
            >{name}</span>
            <button onClick={()=>{
                dispatch({type : ACTION_TYPE.delete_student , payload :{id}})
            }}>삭제</button>
        </div>
    )
}

export default Student