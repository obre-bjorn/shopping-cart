import React from 'react';

import Button from './Button';
import styles from "./Item.module.css"


const Item = ({id,name,price,image,description,category, handleAddCart}) => {


    return (
        <div className={styles.card}> 
            <div className={styles.left}>
                <img src={image} alt="shoe"/>
            </div>
            <div className={styles.right}>
                <div className={styles['product-info']}> {/* Use brackets for dynamic class name */}
                    <div className={styles['product-name']}> {/* Use brackets for dynamic class name */}
                        <h1>{name}</h1>
                    </div>
                    <div className={styles.details}> 
                        <h3>Winter Collection</h3>
                        <h2>{category}</h2>
                        <h4><span className="fa fa-dollar"></span>Ksh.{price}</h4>
                    </div>
                    <Button label="Add to Cart" handleClick={handleAddCart}/>
                </div>
            </div>
        </div>
    );
}

export default Item;
