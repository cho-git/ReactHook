import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UsState from './ReactHook/StateHook/UsState';
import UsReducer from './ReactHook/StateHook/UsReducer';
import UsReducerVer2 from './ReactHook/StateHook/UsReducerVer2';
import UsContext from './ReactHook/ContextHook/UsContext';
import './index.css'
function App() {
  return (
    <div className="App">
      <nav>
        <Link to={"/"}> 홈 </Link> |  
        <Link to={"/UsState"}> useState </Link>     |
        <Link to={"/UsReducer"}> UsReducer </Link>    |
        <Link to={"/UsReducerVer2"}> UsReducerVer2 </Link>  |   
        <Link to={"/UsContext"}> UsContext </Link>  |
        
      </nav>
      <Routes>
        <Route path='/UsState' element={<UsState />} />
        <Route path='/UsReducer' element={<UsReducer />} />
        <Route path='/UsReducerVer2' element={<UsReducerVer2 />} />
      <Route path='/UsContext' element={<UsContext />} />
    </Routes>
    </div>
  );
}

export default App;
