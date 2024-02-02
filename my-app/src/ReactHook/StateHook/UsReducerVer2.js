// 조금 더 복잡한 state 를 관리하는 UseReducer 예제
import React, { useReducer, useState } from "react"
import Student from "./Student";

const ACTION_TYPE = {
    add_student: 'add-student',
    delete_student: 'delete-student',
    mark_student: 'mark-student'
}
const initialState = {
    count: 1,
    students: [
        {
            id: Date.now(),
            name: 'Cho',
            isHere: false,
        }
    ]

}

const reducer = (state, action) => {
    debugger
    switch (action.type) {
        case ACTION_TYPE.add_student:
            const name = action.payload.name;
            if (name == null || name == '') {
                alert('이름을 적으세요')
                return state
            } else {
                const newStudent = {
                    id: Date.now(),
                    name,
                    isHere: false,
                }
                return {
                    count: state.count + 1,
                    students: [...state.students, newStudent]
                }
            };
            
        case ACTION_TYPE.delete_student:
            return {
                count: state.count - 1,
                students: state.students.filter(student => student.id !== action.payload.id),
            }
        case ACTION_TYPE.mark_student:
            return {
                count: state.count,
                students: state.students.map(student => {
                    if (student.id === action.payload.id) {
                        return { ...student, isHere: !student.isHere };
                    }
                    return student
                })
            }
        default:
            return state;
    }
}


const UsReducerVer2 = () => {
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>출석부</h2>
            <p>총 학생 수 : {studentsInfo.count}</p>
            <input
                type="text"
                placeholder="이름을 입력해주세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => {
                dispatch({ type: ACTION_TYPE.add_student, payload: { name } })
                setName('');
            }}>추가</button>
            {studentsInfo.students.map(student => {
                return (<Student
                    ACTION_TYPE={ACTION_TYPE}
                    key={student.id}
                    name={student.name}
                    dispatch={dispatch}
                    id={student.id}
                    isHere={student.isHere}
                />)
            })}
        </div>
    )
}

export default UsReducerVer2