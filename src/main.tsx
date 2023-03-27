import React from 'react'
import ReactDOM from 'react-dom/client'
import 'typeface-roboto'
import App from './App'
import './main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])
 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
