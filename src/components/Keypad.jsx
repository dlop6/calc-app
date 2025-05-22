// src/components/Keypad.jsx
import React from 'react'
import PropTypes from 'prop-types'

const buttons = [
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '/', value: '/' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '*', value: '*' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '-', value: '-' },
  { label: '0', value: '0' },
  { label: '.', value: '.' },
  { label: '=', value: '=' },
  { label: '+', value: '+' }
]

export default function Keypad ({ onButtonClick }) {
  return (
    <div className="keypad">
      {buttons.map(button => (
        <button
          key={button.label}
          onClick={() => onButtonClick(button.value)}
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}

Keypad.propTypes = {
  onButtonClick: PropTypes.func.isRequired
}
