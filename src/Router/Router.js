import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../Pages/Home/Home/Home';
import Services from '../Pages/Home/Services/Services';
import SingleService from '../Pages/Shared/ServiceCards/SingleService';

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
            path: '/services',
            element: <Services></Services>,
            loader: ({params}) => fetch(`http://localhost:5000/services`)
        },
        {
            path: '/services/:id',
            element: <SingleService></SingleService>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
       
      ]
    }
  ])

export default router;