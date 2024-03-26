
import { useState } from 'react';
import PropTypes from 'prop-types';


import cartStyles from './Cart.module.css'


const Cart = ({cart}) => {

    const [showCart, setShowCart] = useState(false)

    let totalcartItems = cart.length 
    console.log(cart)

    return (
        <>

            <h3 className={cartStyles['cart-detail']} onClick={() => setShowCart(!showCart)}> Cart({totalcartItems})</h3>

            {showCart && <div className="cart">

                {
                    cart.map(cartItem => <h1 key={cartItem.id}>{cartItem.title} : {cartItem.quantity} : Total Cost: {cartItem.cost} </h1>)
                
                }

            </div>
            }
            
        </>
    
    );
}

Cart.propTypes = {
    cart: PropTypes.array,
}

export default Cart;
