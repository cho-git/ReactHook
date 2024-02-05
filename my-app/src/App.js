import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Page/Home';
import UsState from './ReactHook/StateHook/UsState';
import UsReducer from './ReactHook/StateHook/UsReducer';
import UsReducerVer2 from './ReactHook/StateHook/UsReducerVer2';
import UsContext from './ReactHook/ContextHook/UsContext';
import UsRef from './ReactHook/RefHook/UsRef';
import UsRefVer1_2 from './ReactHook/RefHook/UsRefVer1_2';
import UsRefVer1_3 from './ReactHook/RefHook/UsRefVer1_3';
import UsRefVer2 from './ReactHook/RefHook/UsRefVer2';
import './index.css'
function App() {
  const commonStyle = {
    marginRight: '5px',
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
  };
  return (
    <div className="App">
      <div id='top' style={{
        textAlign: 'center',
        paddingBottom: '10px',
        paddingTop: '15px',
      }}>
        <nav id='top-nav' >
          <Link style={commonStyle} to={"/"}> Home |</Link>
          <Link style={commonStyle} to={"/UsState"}> useState |</Link>
          <Link style={commonStyle} to={"/UsReducer"}> UseReducer |</Link>
          {/* <Link style={commonStyle} to={"/UsReducerVer2"}> UseReducerVer2 |</Link> */}
          <Link style={commonStyle} to={"/UsContext"}> UseContext |</Link>
          <Link style={commonStyle} to={"/UsRef"}> UseRef |</Link>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/UsState' element={<UsState />} />
        <Route path='/UsReducer' element={<UsReducer />} />
        <Route path='/UsReducerVer2' element={<UsReducerVer2 />} />
        <Route path='/UsContext' element={<UsContext />} />
        <Route path='/UsRef' element={<UsRef />} />
        <Route path='/UsRefVer1_2' element={<UsRefVer1_2 />} />
        <Route path='/UsRefVer1_3' element={<UsRefVer1_3 />} />
        <Route path='/UsRefVer2' element={<UsRefVer2 />} />
      </Routes>
    </div >

    
  );
}

export default App;
