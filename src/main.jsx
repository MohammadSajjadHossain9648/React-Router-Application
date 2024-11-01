import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';

const router = createBrowserRouter([
  {
    //single router
    path: "/",
    element: <Home></Home>,
    //nested router
    children: [
      {
        path: "/about",
        element: <About></About>,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
