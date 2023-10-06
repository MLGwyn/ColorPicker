import React, { useState } from 'react'

export function ColorPicker() {
  const [hue, setHue] = useState(Math.round(Math.random() * 360).toString())
  const [saturation, setSaturation] = useState(
    Math.round(Math.random() * 100).toString()
  )
  const [lightness, setLightness] = useState(
    Math.round(Math.random() * 100).toString()
  )
  function RandomColor() {
    setHue(Math.round(Math.random() * 360).toString())
    setSaturation(Math.round(Math.random() * 100).toString())
    setLightness(Math.round(Math.random() * 100).toString())
  }

  return (
    <div>
      <div
        className="well"
        style={{ backgroundColor: `hsl(${hue},${saturation}%,${lightness}%)` }}
      ></div>

      <div>
        H
        <input
          value={hue}
          type="range"
          min="0"
          max="360"
          onChange={(event) => setHue(event.target.value)}
        />
        {hue}
      </div>
      <div>
        S
        <input
          value={saturation}
          type="range"
          min="0"
          max="100"
          onChange={(event) => setSaturation(event.target.value)}
        />
        {saturation}%
      </div>
      <div>
        L
        <input
          value={lightness}
          type="range"
          min="0"
          max="100"
          onChange={(event) => setLightness(event.target.value)}
        />
        {lightness}%
      </div>
      <div>
        <button onClick={RandomColor}>Randomize!</button>
      </div>
    </div>
  )
}
