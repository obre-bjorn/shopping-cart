import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { useState,useEffect } from "react";

import Root from "./pages/Root/Root";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import ItemDetail from './pages/ItemDetail'

export default function Router() {

    const [cart, setCart] = useState([])

    // const [items, setItems] = useState (null)
    // const [loading, setLoading] = useState([true])

    // useEffect(()=>{
       
    //         const fetchData = async () =>{

    //             const data  = await ( (await fetch('https://fakestoreapi.com/products/')).json()) 

    //             console.log(data)

    //             if(items === null){
                    
    //                 setItems(data)
    //                 setLoading(false)
    //             }
    //         } 
            
    //         fetchData()

    //     return ()=> {
    //         console.log('It has been removed')
    //     }
    // },[items])

    // console.log("Shop rendered")

      

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
                        path:'item/:itemid',
                        element: <ItemDetail />,
                }
                    ]
                },
                
            ]
        }
    ])

  return (
    <RouterProvider router={router}/>
  )
}
