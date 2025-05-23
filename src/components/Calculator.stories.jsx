import React from 'react'
import Calculator from './Calculator'

export default {
  title: 'Components/Calculator',
  component: Calculator
}

export const Initial = () => <Calculator />

export const AfterSomeInput = () => {
  // simula clicks con un pequeño script
  const ref = React.createRef()
  return <Calculator ref={ref} />
}
// (Para esta historia podrías animar con Storybook Controls o con un decorator)
