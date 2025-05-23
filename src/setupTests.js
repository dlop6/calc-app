/* eslint-disable react/no-deprecated */
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

// Mapa para guardar los roots por contenedor
ReactDOM._roots = new Map()

// Polyfill de ReactDOM.render con createRoot
ReactDOM.render = (element, container) => {
  let root = ReactDOM._roots.get(container)
  if (!root) {
    root = createRoot(container)
    ReactDOM._roots.set(container, root)
  }
  root.render(element)
}

// Polyfill de ReactDOM.unmountComponentAtNode
ReactDOM.unmountComponentAtNode = (container) => {
  const root = ReactDOM._roots.get(container)
  if (root) {
    root.unmount()
    ReactDOM._roots.delete(container)
  }
}
