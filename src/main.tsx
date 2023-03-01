import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/templates/home/home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import CountryDetailsPage from './routes/countryDetailsPage'
import MainPage from './routes/MainPage'
import './components/styles/global.css'
import './components/styles/theme.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    // children: [ // nested route
    //   {
    //     path: "contacts/:contactId",
    //     element: <Home />,
    //   },
    // ],
  },
  {
    path: "countryDetails/:id",
    element: <CountryDetailsPage />,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)