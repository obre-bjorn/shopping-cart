// import React from 'react'
// import { Link } from 'react-router-dom'
import { useState } from "react";


import { Link, Outlet } from "react-router-dom";
import Cart from "../../components/Cart";

import styles from "./Root.module.css";

export default function Root() {

  const [cart, setCart] = useState([])
 return (
    <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Cart total={cart.length}/>
        </nav>

        <main >
          <Outlet {setCart}/>
        </main>
    </>
  )
}
