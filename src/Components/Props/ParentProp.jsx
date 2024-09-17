import React from 'react'
import ChildProp from './ChildProp'

export default function ParentProp() {
    const arr = ["Royal Enfield","BMW","Bajaj","Yamaha"]
  return (
    <div>
        <h1>Parent File</h1>
        <ol>
            {
                arr.map((items,index)=>{
                    return(
                        <li key={index}>{items}</li>
                    )
                })
            }
        </ol>

        <ChildProp bikes={arr} />
    </div>
  )
}
