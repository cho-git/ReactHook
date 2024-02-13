
// 커스텀 후
import { useFetch } from "./useFetch";

const baseUrl ="https://jsonplaceholder.typicode.com";

const CustomHook2 = () => {

    // const {data ,fetchUrl} = useFetch(baseUrl,"users") 버튼 지우기 전
    const {data :userData} = useFetch(baseUrl,"users")
    const {data :postData} = useFetch(baseUrl,"users")
    const {data :todoData} = useFetch(baseUrl,"users")
    return (
        <div id='top' style={{
            textAlign: 'center',
            paddingBottom: '10px',
            paddingTop: '15px',
        }}>
            <h3>CustomHook</h3>
            <hr style={{ marginTop: '15px' }}></hr>
            <h5>usefetch</h5>
            <h1>User</h1>
            { userData && <pre>{JSON.stringify(userData[0],null,2)}</pre>}
            <h1>Post</h1>
            { postData && <pre>{JSON.stringify(postData[0],null,2)}</pre>}
            <h1>Todo</h1>
            { todoData && <pre>{JSON.stringify(todoData[0],null,2)}</pre>}
        </div>
    )
}

// Custom 이전
// import { useState , useEffect } from "react";

// const baseUrl ="https://jsonplaceholder.typicode.com";

// const CustomHook2 = () => {
//     const [data , setData] = useState(null)
//     const fetchUrl = (type) => {
//         fetch(baseUrl + '/' + type)
//             .then((res) => res.json())
//             .then((res) => setData(res));
//     }

//     useEffect(() => {
//         fetchUrl("users")
//     }, [])

//     return (
//         <div id='top' style={{
//             textAlign: 'center',
//             paddingBottom: '10px',
//             paddingTop: '15px',
//         }}>
//             <h3>CustomHook</h3>
//             <hr style={{ marginTop: '15px' }}></hr>
//             <h5>usefetch</h5>
//             <button onClick={() => fetchUrl("users")}>Users</button>
//             <button onClick={() => fetchUrl("posts")}>Posts</button>
//             <button onClick={() => fetchUrl("todos")}>Todos</button>
//             <pre>{JSON.stringify(data,null,2)}</pre>
//         </div>
//     )
// }

export default CustomHook2;
