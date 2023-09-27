import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo/Todo'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'

function App() {
  const router = createBrowserRouter([
    {path:'', element:<Todo/>, errorElement:<ErrorPage/>}
  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
