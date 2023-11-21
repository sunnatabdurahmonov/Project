import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SectionContext, SectionContextProvider } from './Context/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SectionContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </SectionContextProvider>
  </React.StrictMode>
)
