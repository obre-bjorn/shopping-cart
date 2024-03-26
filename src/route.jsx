import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { useState,} from "react";

import Root from "./pages/Root/Root";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import ItemsView from "./pages/ItemView/ItemsView";
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
                        {
                            index: true,
                            element: <ItemsView cart={cart} setCart = {setCart}/>
                        }
                        ,
                        {   
                            path: ':category',
                            element: <ItemsView cart={cart} setCart = {setCart}/>
                        }
                    ]
                },
                {
                    path:'shop/item/:itemid',
                    element: <ItemDetail cart={cart} setCart={setCart}/>,
                }
                
            ]
        }
    ])

  return (
    <RouterProvider router={router}/>
  )
}
