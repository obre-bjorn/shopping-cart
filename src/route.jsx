import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { useState,useEffect } from "react";

import Root from "./pages/Root/Root";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import ItemDetail from './pages/ItemDetail'

export default function Router() {

    const [cart, setCart] = useState([])
      

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Root cart={cart}/>,
            children: [
                {
                    path: '/',
                    element: <Homepage />
                },
                {
                    path:'shop',
                    element:<Shop  setCart={setCart}/>,
                    children:[
                    ]
                },
                {
                    path:'shop/item/:itemid',
                    element: <ItemDetail />,
                }
                
            ]
        }
    ])

  return (
    <RouterProvider router={router}/>
  )
}
