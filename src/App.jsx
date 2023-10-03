import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo/Todo'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import SingleTodo from './components/Todo/SingleTodo'

function App() {
  const router = createBrowserRouter([
    {path:'', errorElement:<ErrorPage/>, children:[
      {index:true, element:<Todo/>},
      {path:':id', element:<SingleTodo/>}
    ]}
  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
