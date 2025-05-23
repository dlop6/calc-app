import React from 'react'
import PropTypes from 'prop-types'

const buttonLabels = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+'],
  ['%', '+/-', 'C']
]

export default function Keypad ({ onButtonClick }) {
  return (
    <div className="keypad">
      {buttonLabels.flat().map(label => (
        <button
          key={label}
          onClick={() => onButtonClick(label)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

Keypad.propTypes = {
  onButtonClick: PropTypes.func.isRequired
}
