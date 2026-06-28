import React from 'react'

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
        <div className="option-card-details">
          <p>
            {option.name}
            <br />
            💵 ${option.price}
          </p>
        </div>
      </div>
    </div>
  )
}

export default OptionCard 