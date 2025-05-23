// src/components/Display.jsx
import React from 'react'
import PropTypes from 'prop-types'

export default function Display ({ value }) {
  const text = value.length > 9 ? 'ERROR' : value
  return (
    <div className="display" data-testid="display">
      {text}
    </div>
  )
}

Display.propTypes = {
  value: PropTypes.string.isRequired
}
