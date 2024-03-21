import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContextProvider from './context/UserContextProvider.jsx'
import UserContext from './context/UserContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <UserContext.Provider> */}
    <App />
    {/* </UserContext.Provider> */}
  </React.StrictMode>,
)
