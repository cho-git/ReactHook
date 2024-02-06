import React, { useCallback, useState } from "react";
import { Link } from 'react-router-dom'
import Box from './component/Box'
const UsCallbackVer2 = () => {
    const [size, setSizes] = useState(100);
    const [isDark, setIsDark] = useState(false);

    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: 'pink',
            width: `${size}px`,
            height: `${size}px`,
        };
    }, [size]);

    return (
        <div>
            <div style={{
                textAlign: 'center',
                paddingTop: '15px',
            }}>
                <h3>useCallback v.2</h3>
            </div>
            <div id='top' style={{
                textAlign: 'center',
                paddingTop: '20px',
                height: `${size}px`,
                background: isDark ? 'black' : 'white',
            }}>

                <input
                    type="number"
                    value={size}
                    onChange={(e) => setSizes(e.target.value)}
                />
                <button onClick={() => setIsDark(!isDark)}>change Theme</button>

                <Box createBoxStyle={createBoxStyle} />
                <div style={{
                    paddingTop: '10%',
                    paddingRight: '5%'
                }}>
                    <hr></hr>
                    <h5
                        style={{
                            color: 'gray',
                            // paddingBottom:'10px'
                            padding: '20px 0 30px 0'
                        }}>useCallback 과 useMemo를 공부하고 React.Memo에 대해 알아보자</h5>
                    <Link style={{
                        marginRight: '5px',
                        textDecoration: 'none',
                        color: 'green',
                        fontWeight: 'bold',
                    }}
                        to={"/Memo"}>React.Memo </Link>
                </div>

            </div>
        </div>
    )
}

export default UsCallbackVer2