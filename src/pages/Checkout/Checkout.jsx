import React from 'react';
import PropTypes from 'prop-types';

import checkoutStyles from './Checkout.module.css'


const Checkout = ({cart}) => {
    return (
        <div>
            <h1>Checkout Page</h1>
            {cart.map(item => <h1 key={item.id}>{item.title}</h1>)}

            <button>Make Payment</button>
        </div>
    );
};


Checkout.propTypes = {
    cart: PropTypes.array,
    setCart:  PropTypes.func
};


export default Checkout;
