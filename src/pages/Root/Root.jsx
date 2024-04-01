// import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types"

import Cart from "../../components/Cart";

// import styles from "./Root.module.css";

export default function Root({cart, setCart}) {
  console.log("root rendered")


 return (
    <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Cart cart={cart} setCart={setCart}/>
        </nav>

        <main >
          <Outlet />
        </main>
    </>
  )
}

Root.propTypes ={
  cart: PropTypes.array,
  setCart: PropTypes.func,
}
