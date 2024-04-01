// import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types"

import Cart from "../../components/Cart";

import styles from "./Root.module.css";

export default function Root({cart, setCart}) {
  console.log("root rendered")


 return (
    <>
        <nav className={styles.navbar}>
              
              <div className={styles.navLinks}>
                <Link to='/'><h4>Home</h4></Link>
                <Link to='/shop'><h4>Shop</h4></Link>
              </div>

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
