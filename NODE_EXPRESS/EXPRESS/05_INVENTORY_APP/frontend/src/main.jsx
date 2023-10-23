import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import InventoryRouter from './routes/InventoryRouter'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <InventoryRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
