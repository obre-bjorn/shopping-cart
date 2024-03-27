
import { useState } from 'react';
import PropTypes from 'prop-types';


import cartStyles from './Cart.module.css'

import Button from './Button';


const Cart = ({cart}) => {

    const [showCart, setShowCart] = useState(false)

    let totalcartItems = cart.length 
    console.log(cart)

    return (
        <>

            <h3 className={cartStyles['cart-detail']} onClick={() => setShowCart(!showCart)}> Cart({totalcartItems})</h3>

            {showCart && <div className={cartStyles.cart}>
                <Button label="X" handleClick={() => setShowCart(false)}/>

                    {cart.length < 1 && <h1>No Items Available</h1>}
                {
                    cart.map(cartItem => <h4 className={cartStyles['cart-detail']} key={cartItem.id}>{cartItem.title} : {cartItem.quantity} : Total Cost: {cartItem.cost} </h4>)
                
                }

                <h3 className={cartStyles['cart-detail']}>TOTAL COSTS: {cart.reduce((total,item) =>{
                                    return total + item.cost
                                },0)}
                </h3>
                
            </div>
            }

        </>
    
    );
}

Cart.propTypes = {
    cart: PropTypes.array,
}

export default Cart;
