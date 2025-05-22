import React from 'react'
import PropTypes from 'prop-types'

export default function Display ({ value }) {
  // Si supera 9 caracteres, forzamos ERROR
  const text = value.length > 9 ? 'ERROR' : value
  return (
    <div className="display">
      {text}
    </div>
  )
}

Display.propTypes = {
  value: PropTypes.string.isRequired
}
