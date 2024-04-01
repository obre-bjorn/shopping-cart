import PropTypes from 'prop-types';

import cartItemStyles from './CartItem.module.css'

const CartItem = ({item, deductItem,addItem}) => {
    return (
        <div className={cartItemStyles.itemContainer}>
            <h1 className={cartItemStyles.title}>{item.title}</h1>
            <span className={cartItemStyles.quantity}>
                <button className={cartItemStyles.button} onClick={deductItem}>-</button>
                <h1>{item.quantity}</h1>
                <button className={cartItemStyles.button} onClick={addItem}>+</button> 
            </span>

            <h1 className='cost'>{item.cost}</h1>
        </div>
    );
};


CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    deductItem: PropTypes.func,
    addItem: PropTypes.func
};


export default CartItem;
