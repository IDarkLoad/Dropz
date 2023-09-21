import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.tsx'
import './components/OtherStyles/styles.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from "./routes/Home/Home.tsx"
import Repository from './routes/Repository/Repository.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/repos/:username",
        element: <Repository />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
