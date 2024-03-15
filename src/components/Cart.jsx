
import { useState } from 'react';
import cartStyles from './Cart.module.css'


const Cart = ({cart}) => {

    const [showCart, setShowCart] = useState(false)

    let totalcartItems = cart.length 
    return (
        <>

            <h3 className={cartStyles['cart-detail']}>Cart({totalcartItems})</h3>

            {showCart && <div className="cart">



            </div>
            }
            
        </>
    
    );
}

export default Cart;
