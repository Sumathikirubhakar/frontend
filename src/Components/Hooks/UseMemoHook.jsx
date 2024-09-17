import React, { useMemo, useState } from 'react'

export default function UseMemoHook() {


    const [num, setNum] = useState(0);

    const loop = useMemo(handleLoop,[num]);

    function handleLoop(){
        let changes = 0;
        for( let i=0;i<num;i++){
            changes +=num*num
        }
        return changes;
    }
    return (
        <div>
            <form action="">
                <label htmlFor="">Enter a color name or hexcode</label>
                <input type="number" name="" value={num} onChange={(e) => setNum(e.target.value)} id="" />
            </form>

            <h1>
                result :{num} <br />
                loop : {loop}
            </h1>
        </div>
    )
}
