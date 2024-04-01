import PropTypes from 'prop-types';

import checkoutStyles from './Checkout.module.css'


const Checkout = ({amount}) => {


    return (
        <div>
            <h1>Checkout Page</h1>

            <button>Make Payment</button>
        </div>
    );
};


Checkout.propTypes = {
   amount: PropTypes.number
};


export default Checkout;
