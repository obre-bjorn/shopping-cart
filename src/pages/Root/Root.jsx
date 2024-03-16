// import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types"

import Cart from "../../components/Cart";

// import styles from "./Root.module.css";

export default function Root({cart}) {



 return (
    <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Cart cart={cart} />
        </nav>

        <main >
          <Outlet />
        </main>
    </>
  )
}

Root.propTypes ={
  cart: PropTypes.array,
}
