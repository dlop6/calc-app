import React from 'react'
import Display from './Display'

export default {
  title: 'Components/Display',
  component: Display
}

const Template = (args) => <Display {...args} />

export const Zero = Template.bind({})
Zero.args = { value: '0' }

export const MaxDigits = Template.bind({})
MaxDigits.args = { value: '123456789' }

export const Error = Template.bind({})
Error.args = { value: '1234567890' } //
