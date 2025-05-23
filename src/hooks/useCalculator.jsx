import { useState } from 'react'

export default function useCalculator () {
  const [displayValue, setDisplayValue] = useState('0')
  const [accumulator, setAccumulator] = useState(null) // numero anterior
  const [pendingOp, setPendingOp] = useState(null) // +, -, *, /
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  function operate (acc, cur, op) {
    switch (op) {
      case '+': return acc + cur
      case '-': return acc - cur
      case '*': return acc * cur
      case '/': return acc / cur
      case '%': return acc % cur // <-- módulo
      default: return cur
    }
  }
  function toggleSign () {
    if (displayValue === 'ERROR') return
    if (displayValue.startsWith('-')) {
      setDisplayValue(displayValue.slice(1))
    } else if (displayValue !== '0') {
    // añade '-' si cabe
      if (displayValue.length < 9) {
        setDisplayValue('-' + displayValue)
      } else {
        setDisplayValue('ERROR')
      }
    }
  }

  function performOperation (nextOp) {
    const current = parseFloat(displayValue)
    let result

    if (pendingOp === null) {
      result = current
    } else {
      result = operate(accumulator, current, pendingOp)
    }

    if (String(result).length > 9 || result < 0 || result > 999999999) {
      setDisplayValue('ERROR')
      setAccumulator(null)
      setPendingOp(null)
      return
    }

    // todo OK: actualiza estado
    setDisplayValue(String(result))
    setAccumulator(result)
    setPendingOp(nextOp)
    setWaitingForOperand(true)
  }

  function inputDot () {
    if (waitingForOperand) {
      setDisplayValue('0.')
      setWaitingForOperand(false)
    } else if (!displayValue.includes('.') && displayValue.length < 9) {
      setDisplayValue(prev => prev + '.')
    }
  }

  function inputDigit (digit) {
    if (waitingForOperand) {
      setDisplayValue(digit)
      setWaitingForOperand(false)
    } else if (displayValue === '0') {
      setDisplayValue(digit)
    } else if (displayValue.length < 9) {
      setDisplayValue((prevValue) => prevValue + digit)
    }
  }

  function handleInput (buttonValue) {
    if (buttonValue === '+/-') {
      toggleSign()
      return
    }
    if (/[0-9]/.test(buttonValue)) {
      inputDigit(buttonValue)
      return
    }
    if (buttonValue === '.') {
      inputDot()
      return
    }
    if (['+', '-', '*', '/', '%'].includes(buttonValue)) {
      performOperation(buttonValue)
      return
    }
    if (buttonValue === '=') {
      performOperation(null)
    }
    if (buttonValue === 'C') {
      setDisplayValue('0')
      setAccumulator(null)
      setPendingOp(null)
      setWaitingForOperand(false)
    }
  }

  return {
    displayValue,
    handleInput
  }
}
