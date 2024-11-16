import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './Counter.jsx'
import ToggleButton from './ToggleButton.jsx'
import FormInput from './FormInput.jsx'
import FetchPosts from './FetchingData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    <ToggleButton />
    <FormInput />
    <FetchPosts />
  </StrictMode>,
)
