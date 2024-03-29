import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Page/Home';

import UsState from './ReactHook/StateHook/UsState';
import UsReducer from './ReactHook/StateHook/UsReducer';
import UsReducerVer2 from './ReactHook/StateHook/UsReducerVer2';

import UsContext from './ReactHook/ContextHook/UsContext';

import UsRef from './ReactHook/RefHook/UsRef';
import UsRefVer1_1 from './ReactHook/RefHook/UsRefVer1_1';
import UsRefVer1_2 from './ReactHook/RefHook/UsRefVer1_2';
import UsRefVer2 from './ReactHook/RefHook/UsRefVer2';
import ForwardReff from './ReactHook/RefHook/forwardRef/ForwarReff';

import UsEffect from './ReactHook/EffectHook/UsEffect';
import UsEffectVer1_1 from './ReactHook/EffectHook/UsEffectVer1_1';
import UsEffectVer2 from './ReactHook/EffectHook/UsEffectVer2';

import UsMemo from './ReactHook/PerformanceHook/UsMemo';
import UsMemoVer2 from './ReactHook/PerformanceHook/UsMemoVer2';
import UsCallback from './ReactHook/PerformanceHook/UsCallback';
import UsCallbackVer2 from './ReactHook/PerformanceHook/UsCallbackVer2';
import Memo from './ReactHook/PerformanceHook/React.Memo/Memo';
import MemoUsMemo from './ReactHook/PerformanceHook/React.Memo/MemoUsMemo';
import MemoUsCallback from './ReactHook/PerformanceHook/React.Memo/MemoUsCallback';
import UsTransition from './ReactHook/PerformanceHook/TransitionDeferred/UsTransition';

import CustomHook from './ReactHook/customHook/CustomHook';
import CustomHook2 from './ReactHook/customHook/CustomHook2';

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
          <Link style={commonStyle} to={"/UsReducer"}> useReducer |</Link>
          <Link style={commonStyle} to={"/UsContext"}> useContext |</Link>
          <Link style={commonStyle} to={"/UsRef"}> useRef |</Link>
          <Link style={commonStyle} to={"/UsEffect"}> useEffect |</Link>
          <Link style={commonStyle} to={"/UsMemo"}> useMemo |</Link>
          <Link style={commonStyle} to={"/UsCallback"}> useCallback |</Link>
          <Link style={commonStyle} to={"/UsTransition"}> useTransition |</Link>
          <Link style={commonStyle} to={"/CustomHook"}> CustomHook |</Link>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/UsState' element={<UsState />} />
        <Route path='/UsReducer' element={<UsReducer />} />
        <Route path='/UsReducerVer2' element={<UsReducerVer2 />} />
        <Route path='/UsContext' element={<UsContext />} />
        <Route path='/UsRef' element={<UsRef />} />
        <Route path='/UsRefVer1_1' element={<UsRefVer1_1 />} />
        <Route path='/UsRefVer1_2' element={<UsRefVer1_2 />} />
        <Route path='/UsRefVer2' element={<UsRefVer2 />} />
        <Route path='/ForwardReff' element={<ForwardReff />}/>
        <Route path='/UsEffect' element={<UsEffect />}/>
        <Route path='/UsEffectVer1_1' element={<UsEffectVer1_1 />}/>
        <Route path='/UsEffectVer2' element={<UsEffectVer2 />}/>
        <Route path='/UsMemo' element={<UsMemo />}/>
        <Route path='/UsMemoVer2' element={<UsMemoVer2 />}/>
        <Route path='/UsCallback' element={<UsCallback />}/>
        <Route path='/UsCallbackVer2' element={<UsCallbackVer2 />}/>
        <Route path='/Memo' element={<Memo />}/>
        <Route path='/MemoUsMemo' element={<MemoUsMemo />}/>
        <Route path='/MemoUsCallback' element={<MemoUsCallback />}/>
        <Route path='/UsTransition' element={<UsTransition/>}/>
        <Route path='/CustomHook' element={<CustomHook/>}/>CustomHook2
        <Route path='/CustomHook2' element={<CustomHook2/>}/>
      </Routes>
    </div >

    
  );
}

export default App;


