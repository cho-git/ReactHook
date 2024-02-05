import React, { useEffect, useState } from "react";
import Timer from "./component/Timer";

const UsEffectVer1_1 = () => {

    const [showTimer, setShowTimer] = useState(false);
    return (
        <div>
            {showTimer &&  <Timer />}
            <button style={{
                position: 'absolute',
                marginTop: '10%',
                marginLeft: '46%',
                width: '100px'
            }}
                onClick={() => setShowTimer(!showTimer)}
            >Toggle Timer</button>
        </div>
    )
}

export default UsEffectVer1_1