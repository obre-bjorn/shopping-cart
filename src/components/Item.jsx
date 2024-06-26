import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Button from './Button';
import styles from "./Item.module.css"


    const Item = ({item,handleAddCart}) => {


    const [quantity,setQuantity] = useState(1)

    const {id,title,price,image} = item
        
    function handleClick(e){
        console.log('clicked')
            e.stopPropagation()
            handleAddCart(id)
            setQuantity(1)
        }

  
    return (
        <div className={styles.card}> 
            <Link to={`/shop/item/${id}`}>
                <div className={styles.left}>
                    <img src={image} alt="shoe"/>
                </div>
            </Link>
                <div className={styles.right}>
                    <div className={styles['product-info']}> {/* Use brackets for dynamic class name */}
                        <div className={styles['product-name']}> {/* Use brackets for dynamic class name */}
                            <h1>{title}</h1>
                        </div>
                        <div className={styles.details}> 
                            {/* <h2>{category}</h2> */}
                            <h4><span className="fa fa-dollar"></span>Ksh.{price}</h4>
                        </div>
                        <input id={`item${id}`} type="number"  value={quantity} onChange={(e)=> setQuantity(e.target.value)} min="1"/>
                        <Button label="Add to Cart" handleClick={handleClick} />
                    </div>
                </div>
                
            </div>
    );
}

Item.propTypes = {
    item: PropTypes.object,
    handleAddCart: PropTypes.func
}

export default Item;
