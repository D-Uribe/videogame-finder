import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { VideogameFinder } from './VideogameFinder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VideogameFinder />
  </StrictMode>,
)
