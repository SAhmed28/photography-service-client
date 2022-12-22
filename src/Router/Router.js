import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import AddService from '../Pages/AddService/AddService';
import Blogs from '../Pages/Blogs/Blogs';
import Home from '../Pages/Home/Home/Home';
import Services from '../Pages/Home/Services/Services';
import Login from '../Pages/Login/Login';
import MyReviews from '../Pages/MyReviews/MyReviews';
import Register from '../Pages/Register/Register';
import SingleService from '../Pages/Shared/ServiceCards/SingleService';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/my-reviews',
            element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
            path: '/add-service',
            element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
            path: '/services',
            element: <Services></Services>,
            loader: ({params}) => fetch(`https://photography-service-server-nu.vercel.app/services`)
        },
        {
            path: '/services/:id',
            element: <SingleService></SingleService>,
            loader: ({params}) => fetch(`https://photography-service-server-nu.vercel.app/services/${params.id}`)
        },
       
      ]
    }
  ])

export default router;