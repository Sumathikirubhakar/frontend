import React, { useState } from 'react'

export const UseStateHook = () => {
    /* 
    Syntax:
        const [VAR1,VAR2] = useState(inital value)
    */

        const [num,setNum] = useState(0);

        function incValue(){
          setNum(num+1)
        }

        const decValue =()=>{
          setNum(num-1)
        }

        // Text
        const [str,setStr] = useState("")
        function handleChangeText(e){
          setStr(e.target.value)
        }
  return (
    <div>
        <button onClick={decValue}>Decrement -</button>
        <h1>{num}</h1>
        <button onClick={incValue}>Increment +</button>
<br />
        <input type="text" name="" onChange={handleChangeText} id="" />
        <h1>Result : {str}</h1>
    </div>
  )
}
