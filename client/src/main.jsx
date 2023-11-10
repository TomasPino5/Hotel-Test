import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { GlobalStateProvider } from './globalState.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStateProvider>
  </React.StrictMode>,
)
