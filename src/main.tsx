import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/scss/style.scss'
import './index.scss'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
