import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { myRouter } from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={myRouter} >
    <App />
   </ RouterProvider>
  </React.StrictMode>,
)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RouterProvider router={myRouter} />);
// reportWebVitals();