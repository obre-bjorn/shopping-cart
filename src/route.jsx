import { createBrowserRouter,RouterProvider } from "react-router-dom";


import Root from "./pages/Root/Root";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";

export default function Router() {


    const router = createBrowserRouter([
        {
            path:"/",
            element:<Root/>,
            children: [
                {
                    path: '/',
                    element: <Homepage />
                },
                {
                    path:'shop',
                    element:<Shop/>,
                }
            ]
        }
    ])

  return (
  <RouterProvider router={router}/>
  )
}
