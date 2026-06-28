import React from 'react'
import OptionCard from './OptionCard.jsx'

const OptionModal = ({
  options,
  selectedOption,
  onSelect,
  onClose
}) => {
  return (
    <div className="option-modal">
      <div className="available-options">
        {options.map(option => (
          <OptionCard
            key={option.id}
            option={option}
            selected={selectedOption?.id === option.id}
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