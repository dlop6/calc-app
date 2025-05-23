import React from 'react'
import Keypad from './Keypad'

export default {
  title: 'Components/Keypad',
  component: Keypad,
  argTypes: {
    onButtonClick: { action: 'clicked' }
  }
}

export const Default = () => (
  <Keypad onButtonClick={(val) => console.log(val)} />
)
