import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './Counter.jsx'
import ToggleButton from './ToggleButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    <ToggleButton />
  </StrictMode>,
)