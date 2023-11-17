import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.tsx";
import LoginForm from "./components/LoginForm/LoginForm.tsx";
import Error from "./components/Error/Error.tsx";
const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [

        ]
    },
    {
        path: '/login',
        element: <LoginForm/>
    },
    {
        path: '*',
        element: <Error/>
    }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
