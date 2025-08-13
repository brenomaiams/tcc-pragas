import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  Registro  from './containers/register/register'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Registro/>
    
  </StrictMode>,
)
