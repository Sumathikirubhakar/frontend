import React, { useCallback, useRef, useState } from 'react'

export default function UseCallBackHook() {

  const [color, setColor] = useState("");
  const dispColor = useRef();

  const handleColorChange = useCallback((e) => {
    e.preventDefault();
    dispColor.current.style.background = color;
  }, [color])
  return (
    <div ref={dispColor} style={{ position: 'absolute', width: "100%", height: "100%" }}>
      <h1>Color Generator</h1>
      <form action="" onSubmit={handleColorChange}>
        <label htmlFor="">Enter a color name or hexcode</label>
        <input type="text" name="" value={color} onChange={(e) => setColor(e.target.value)} id="" />
      </form>
    </div>
  )
}
