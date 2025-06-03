// src/tests/useCalculator.test.js
import { renderHook, act } from '@testing-library/react-hooks'
import useCalculator from '../hooks/useCalculator'

describe('useCalculator hook', () => {
  test('concatena dígitos hasta 9 caracteres y no más', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      // pulsa '1' nueve veces
      for (let i = 0; i < 9; i++) {
        result.current.handleInput('1')
      }
    })
    expect(result.current.displayValue).toBe('111111111')

    act(() => {
      // intenta el décimo dígito
      result.current.handleInput('1')
    })
    expect(result.current.displayValue).toBe('111111111')
  })

  test('punto decimal solo una vez y dentro de límite', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleInput('0')
      result.current.handleInput('.')
      result.current.handleInput('1')
      result.current.handleInput('2')
      result.current.handleInput('.')
      result.current.handleInput('3')
    })
    // solo debe insertar un punto
    expect(result.current.displayValue).toBe('0.123')
  })

  test('cambio de signo (+/-) y cuenta en el límite de 9 caracteres', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleInput('1')
      result.current.handleInput('2')
      result.current.handleInput('3')
      result.current.handleInput('+/-')
    })
    // '-123' cuenta 4 caracteres
    expect(result.current.displayValue).toBe('-123')

    act(() => {
      // vuelve a pulsar para quitar signo
      result.current.handleInput('+/-')
    })
    expect(result.current.displayValue).toBe('123')
  })

  test('operaciones básicas y cadena: 2 + 3 * 4 = 20', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleInput('2')
      result.current.handleInput('+')
      result.current.handleInput('3')
      result.current.handleInput('*')
      result.current.handleInput('4')
      result.current.handleInput('=')
    })
    expect(result.current.displayValue).toBe('20')
  })

  test('operación módulo 7 % 3 = 1', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleInput('7')
      result.current.handleInput('%')
      result.current.handleInput('3')
      result.current.handleInput('=')
    })
    expect(result.current.displayValue).toBe('1')
  })

  test('muestra ERROR en overflow positivo (>999999999) y negativo', () => {
    const { result, rerender } = renderHook(() => useCalculator())

    // overflow positivo: 999999999 + 1
    act(() => {
      // ingresa 9 dígitos '9'
      for (let i = 0; i < 9; i++) {
        result.current.handleInput('9')
      }
      result.current.handleInput('+')
      result.current.handleInput('1')
      result.current.handleInput('=')
    })
    expect(result.current.displayValue).toBe('ERROR')

    // rerenderiza para reiniciar el hook
    rerender()

    // overflow negativo: 1 - 2 = -1
    act(() => {
      result.current.handleInput('1')
      result.current.handleInput('-')
      result.current.handleInput('2')
      result.current.handleInput('=')
    })
    expect(result.current.displayValue).toBe('ERROR')
  })
})
