import React from 'react'
import Display from './Display'
import Keypad from './Keypad'
import useCalculator from '../hooks/useCalculator'

export default function Calculator() {
  const { displayValue, handleInput } = useCalculator()

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <Keypad onButtonClick={handleInput} />
    </div>
  )
}
