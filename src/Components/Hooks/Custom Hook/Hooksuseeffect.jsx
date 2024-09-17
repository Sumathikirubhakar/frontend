import React, {useEffect, useState} from 'react'

export default function UseEffectHook() {
    
    const [text, SetText]= useState("");
    const [date, SetDate]= useState(`${new Date().getDate()} / ${new Date().toLocaleString('default',{month:'short'})} / ${new Date().getFullYear()}`);
    const [time, SetTime]= useState(`${new Date().getHours()} : ${new Date().getMinutes()}: ${new Date().getSeconds()}`);

    useEffect(() => {
        document.getElementById('effectDisplay').style.background= "#" + Math.random().toString(16).substr(-6);
        SetDate(date)

        setInterval(()=>{
            SetTime(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`)
        },1000)

    }, [text,time])
  return (
    <div id="effectDisplay">
        <label htmlFor="">text</label>
        <input type="text" name="" value={text} onChange={(e)=> SetText(e.target.value)} id=""/>
        <h1>{date}</h1>
        <h3>{time}</h3>
        <p>
            {text}
        </p>
    </div>
  )
}
