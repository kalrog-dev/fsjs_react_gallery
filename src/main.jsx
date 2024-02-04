import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { appData } from '@data'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/fsjs_react_gallery'>
      <App data={appData} />
    </BrowserRouter>
  </React.StrictMode>
)
