import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Atenea } from './Atenea.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Atenea />
    </BrowserRouter>
  </React.StrictMode>,
)
