// src/tests/Calculator.test.jsx
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import Calculator from '../components/Calculator'

function clickKeys(keys) {
  keys.forEach((key) => {
    fireEvent.click(screen.getByRole('button', { name: key }))
  })
}

describe('Calculator integration', () => {
  beforeEach(() => {
    cleanup()
    render(<Calculator />)
  })

  test('concatena dígitos hasta 9 caracteres y no más', () => {
    clickKeys(Array(9).fill('1'))
    expect(screen.getByTestId('display')).toHaveTextContent('111111111')

    clickKeys(['1'])
    expect(screen.getByTestId('display')).toHaveTextContent('111111111')
  })

  test('punto decimal solo una vez y dentro de límite', () => {
    clickKeys(['0', '.', '1', '2', '.', '3'])
    expect(screen.getByTestId('display')).toHaveTextContent('0.123')
  })

  test('cambio de signo (+/-) y cuenta en el límite de 9 caracteres', () => {
    clickKeys(['1', '2', '3', '+/-'])
    expect(screen.getByTestId('display')).toHaveTextContent('-123')

    clickKeys(['+/-'])
    expect(screen.getByTestId('display')).toHaveTextContent('123')
  })

  test('operaciones básicas y cadena: 2 + 3 * 4 = 20', () => {
    clickKeys(['2', '+', '3', '*', '4', '='])
    expect(screen.getByTestId('display')).toHaveTextContent('20')
  })

  test('operación módulo 7 % 3 = 1', () => {
    clickKeys(['7', '%', '3', '='])
    expect(screen.getByTestId('display')).toHaveTextContent('1')
  })

  test('muestra ERROR en overflow positivo y negativo', () => {
    clickKeys([...Array(9).fill('9'), '+', '1', '='])
    expect(screen.getByTestId('display')).toHaveTextContent('ERROR')

    cleanup()
    render(<Calculator />)

    clickKeys(['1', '-', '2', '='])
    expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
  })
})
