import React from 'react'
import '../css/Options.css'

const OptionCard = ({ option, selected, onSelect }) => {
  return (
    <div
      className="option-card"
      onClick={() => onSelect(option)}
      style={{
        backgroundImage: `url(${option.image})`,
        border: selected ? "3px solid green" : "1px solid white"
      }}
    >
      <div className="option-card-overlay">
        <p>{option.name}</p>
        <p>💵 ${option.price}</p>
      </div>
    </div>
  )
}

export default OptionCard 