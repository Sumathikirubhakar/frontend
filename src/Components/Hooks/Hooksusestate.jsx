import React, { useState } from 'react'

export const UseStateHook = () => {
   const [num,SetNum] = useState(0);

   function incValue(){
    SetNum (num+1)
}

   const decValue = () =>{
    SetNum (num-1)
}
    const [str,setStr] = useState("")
    function handlechangeText(e){
        setStr(e.target.value)
    }
    return(
        <div>
            <button onClick={decValue}>Decrement -</button>
            <h1>{num}</h1>
            <button onClick={incValue}>Increment +</button>

        <br/>

        <input type="text" name="" onChange={handlechangeText} id=""/>
        <h1>Result: {str}</h1>
        </div>
    )
   }

   