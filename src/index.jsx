// src/index.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Si tienes estilos globales, impórtalos aquí
// import './index.css'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)
