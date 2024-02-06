import React, { useCallback, useState } from "react";
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
    },[size]);

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
                height : `${size}px`,
                background: isDark ? 'black' : 'white',
            }}>

                <input
                    type="number"
                    value={size}
                    onChange={(e) => setSizes(e.target.value)}
                />
                <button onClick={() => setIsDark(!isDark)}>change Theme</button>
                <Box createBoxStyle={createBoxStyle} />
            </div>
        </div>
    )
}

export default UsCallbackVer2