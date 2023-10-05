import React from 'react'

export function ColorPicker() {
  return (
    <div>
      <p>some color goes here</p>
      <div>
        <label htmlFor="hue">H</label>
        <input type="range" id="hue" name="hue" min="0" max="360" />
      </div>
      <div>
        <label htmlFor="saturation">S</label>
        <input
          type="range"
          id="saturation"
          name="saturation"
          min="0%"
          max="100%"
        />
      </div>
      <div>
        <label htmlFor="lightness">L</label>
        <input
          type="range"
          id="lightness"
          name="lightness"
          min="0%"
          max="100%"
        />
      </div>
    </div>
  )
}
