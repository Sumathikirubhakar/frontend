import React, { useRef } from 'react'

export default function USeRefHook() {

    /* 
        const VAR_DEC = useRef(initial Value);
    */
    const listRef = useRef([]);
    const inpRef = useRef(null);

    function submitHandler(){
        console.log(inpRef.current.value);
        listRef.current.push(inpRef.current.value);
    }
  return (
    <div>
        <input type="text" name="" ref={inpRef}  id="" />


        <button onClick={submitHandler}>submit</button>

        <ol>
            {
                listRef.current.map((item)=>{
                    return(
                        <li>{item}</li>
                    )
                })
            }
        </ol>
    </div>
  )
}
