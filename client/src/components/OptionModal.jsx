import React from 'react'
import OptionCard from './OptionCard.jsx'
import '../css/Options.css'

const OptionModal = ({ options, selectedOption, onSelect, onClose }) => {
  return (
    <div className="option-modal">
      <div className="available-options">
        {options.map(option => (
          <OptionCard
            key={option.id}
            option={option}
            selected={selectedOption === option.name}
            onSelect={onSelect}
          />
        ))}
      </div>

      <button onClick={onClose}>
        Done
      </button>
    </div>
  )
}

export default OptionModal