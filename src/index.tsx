import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { GlobalStyles } from './styles/globalStyles'
import { makeServer } from './server'
import AuthProvider from 'context/auth-context'

makeServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyles />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
