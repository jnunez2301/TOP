import React from 'react'
import ReactDOM from 'react-dom/client'
import MembersOnlyApp from './MembersOnlyApp'
import './index.css'
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <MembersOnlyApp />
    </AuthProvider>
  </React.StrictMode>,
)
