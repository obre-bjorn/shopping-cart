
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import cartStyles from './Cart.module.css'

import Button from './Button';
import CartItem from './CartItem';


const Cart = ({cart,setCart}) => {

    const [showCart, setShowCart] = useState(false)
    
    let totalcartItems = cart.length 

    function handleAddItemQuantity(id){
        
        const newCart = cart.map(item => {
            if (item.id == id){
                return {...item, quantity: item.quantity+=1}
            }
            return item
        })

        setCart(newCart)
    }

    function handleDeductItemQuantity(id){
        let newCart = [...cart]

        let itemIndex = cart.findIndex( item => item.id === id)

        const itemQuantity = cart[itemIndex].quantity - 1

        if(itemQuantity !== 0){
            newCart[itemIndex].quantity = itemQuantity
            setCart(newCart)
        }else{
            newCart.splice(itemIndex,1)
            setCart(newCart)
        }
    }


    return (
        <>

            <h3 className={cartStyles['cart-detail']} onClick={() => setShowCart(!showCart)}> Cart({totalcartItems})</h3>

            {showCart && 
            <div className={cartStyles.cart}>
                <Button label="X" handleClick={() => setShowCart(false)}/>

                    {cart.length < 1 ?  
                        <h1>No Items Available</h1>
                        :
                        
                    <>
                        
                        {cart.map(cartItem => <CartItem key={cartItem.id} item={cartItem} deductItem={()=> {handleDeductItemQuantity(cartItem.id)}} addItem={()=> {handleAddItemQuantity(cartItem.id)}}/>)}
                        
                        <h3 className={cartStyles['cart-detail']}>TOTAL COSTS: {cart.reduce((total,item) =>{
                                            return total + item.cost
                                        },0)}
                        </h3>
                    
                        <Link to='/checkout'>
                            <button>Proceed To Checkout</button>
                        </Link>
                    </>
                        }
                
                


            </div>
                
            }

        </>
    
    )
}

Cart.propTypes = {
    cart: PropTypes.array,
    setCart: PropTypes.func
}

export default Cart;
