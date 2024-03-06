import { Outlet, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Body } from './components/Body'
import Islamic from './components/Islamic'
import Techie from './components/Techie'
import Athletic from './components/Athletic'

function App() {


  return (
    <>
   <Outlet />
    </>
  )
}

export const myRouter = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Body />,
    },
    {
      path: '/islamic',
      element: <Islamic />,
    },
    {
      path: '/techie',
      element: <Techie />,
    },
    {
      path: '/athletic',
      element: <Athletic />,
    },
  ]
}])
export default App
