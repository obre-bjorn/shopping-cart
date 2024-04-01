import PropTypes from 'prop-types';

import Button from './Button';

const CartItem = ({item, deductItem,addItem}) => {
    return (
        <div>
            <h1>{item.title}</h1>
            <span>
                <Button label="-" handleClick={deductItem}/>
                <h1>{item.quantity}</h1>
                <Button label="+" handleClick={addItem}/>
            </span>

            <h1>{item.cost}</h1>
        </div>
    );
};


CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    deductItem: PropTypes.func,
    addItem: PropTypes.func
};


export default CartItem;
