import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PrivateRouting from './privaterouting/PrivateRouting'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'

const RouterLayout = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <PageLayout />,
            children: [
                {
                    path: "/home",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/projects",
                    element: <Projects />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/register",
                    element: <Register />
                }
            ]
        },
        {
            path: "/dashboard",
            element: <PrivateRouting>
                <Dashboard />
            </PrivateRouting>
        }
    ])
    return <RouterProvider router={routes} />
}

export default RouterLayout