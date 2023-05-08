import React from 'react'

export default function Bubbles() {
  const bubbles = [];

  for (let i = 0; i < 10; i++) {
    const randomSize = Math.random() * 30;
    const bubbleStyle = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${randomSize}%`,
      height: `${randomSize}%`,
    }
    bubbles.push(<div key={i} className="bubble" style={bubbleStyle} />)
  }

  return (
    <>{bubbles}</>
  )
}
