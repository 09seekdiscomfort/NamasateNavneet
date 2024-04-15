import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header'
import Body from './Components/Body'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Components/About'
import Error from './Components/Error'
import Contact from './Components/Contact'
import RestaurantMenu from './Components/RestaurantMenu'
import AboutClass from './Components/AboutClass'

const Grocery = lazy(() => import('./Components/Grocery'))

const FoodDay = () => {
    return (
        <div className="foodPageContainer">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <FoodDay />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/aboutClass',
                element: <AboutClass name={'navneet'} />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/Menu/:resId',
                element: <RestaurantMenu />,
            },
            {
                path: '/grocery',
                element: (
                    <Suspense>
                        <Grocery />{' '}
                    </Suspense>
                ),
            },
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
