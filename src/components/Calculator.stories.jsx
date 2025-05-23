import React from 'react'
import Calculator from './Calculator'

export default {
  title: 'Components/Calculator',
  component: Calculator
}

export const Initial = () => <Calculator />

export const AfterSomeInput = () => {
  const ref = React.createRef()
  return <Calculator ref={ref} />
}
