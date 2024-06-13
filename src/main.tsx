import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Header from './componentes/Header.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>,
)
