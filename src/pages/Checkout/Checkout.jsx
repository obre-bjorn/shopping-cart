import PropTypes from 'prop-types';

import checkoutStyles from './Checkout.module.css'


const Checkout = ({amount}) => {

    const handlePaySubmission = () => {



    }
    console.log(amount)
    return (
        <div>
            <h1>Checkout Page</h1>
             <form action="/shop" onSubmit={handlePaySubmission}>
                <h3>You are about to make a payment of ksh.{amount}</h3>
                <input type="number" name="" id="" value />
                <button type="submit">Make Payment</button>
             </form>
            
        </div>
    );
};


Checkout.propTypes = {
   amount: PropTypes.number.isRequired,
};


export default Checkout;
