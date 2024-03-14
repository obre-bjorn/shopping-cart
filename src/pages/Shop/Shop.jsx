import { useState, useEffect } from "react";
import Item from "../../components/Item";

import styles from './Shop.module.css'

const Shop = ( {handleAddCart}) => {
    const [items, setItems] = useState (null)
     const [cartItems, setCartItems] = useState([]);
     const [loading, setLoading] = useState([true])


    useEffect(()=>{
       
            const fetchData = async () =>{

                const data  = await ( (await fetch('https://fakestoreapi.com/products/')).json()) 

                console.log(data)
                setItems(data)
                setLoading(false)
            } 
            
            fetchData()

        return ()=> {
            console.log('It has been removed')
        }
    },[])

    return (
        <div>
            
            <h1>Available Items</h1>

            <div className={styles.container}>

                {loading && <h1>Loading items...</h1>}
                {items && items.map(  item => <Item key={item.id} id= {item.id} name={item.title} price={item.price} image={item.image} description={item.description} category={item.category} handleAddCart />)}
                
            </div>


        </div>
    );
}

export default Shop;
