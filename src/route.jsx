import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { useState } from "react";

import Root from "./pages/Root/Root";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";

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
                    element:<Shop cart={cart} setCart={setCart}/>,
                }
            ]
        }
    ])

  return (
  <RouterProvider router={router}/>
  )
}
