import { useState, useEffect } from "react";
import PropTypes from 'prop-types'

import Item from "../../components/Item";
import styles from './Shop.module.css'
import { Outlet } from "react-router-dom";

const Shop = ( {setCart}) => {

    // const [items, setItems] = useState (null)
    // const [loading, setLoading] = useState([true])

    // useEffect(()=>{
       
    //         const fetchData = async () =>{

    //             const data  = await ( (await fetch('https://fakestoreapi.com/products/')).json()) 

    //             console.log(data)
    //             setItems(data)
    //             setLoading(false)
    //         } 
            
    //         fetchData()

    //     return ()=> {
    //         console.log('It has been removed')
    //     }
    // },[])

    // console.log("Shop rendered")
    const [items, setItems] = useState (null)
    const [loading, setLoading] = useState([true])

    useEffect(()=>{
       
            const fetchData = async () =>{

                const data  = await ( (await fetch('https://fakestoreapi.com/products/')).json()) 

                console.log(data)

                if(items == null){
                    
                    setItems(data)
                    setLoading(false)
                }
            } 
            
            fetchData()

        return ()=> {
            console.log('It has been removed')
        }
    },[items])

    console.log("Shop rendered")

      function handleAddCart(id){

        items.forEach(item => {
            if(item.id === id){
            
                setCart( prev => [...prev,item])
            }
        })

     }
     
    return (
        <div>
            
            <h1>Available Items</h1>

            <div className={styles.container}>

                {loading && <h1>Loading items...</h1>}
                {items && items.map(item => <Item key={item.id} item={item} handleAddCart={handleAddCart}/>)}
                <Outlet context={[items]}/>
            </div>

        </div>
    );
}

Shop.propTypes={
    setCart: PropTypes.func
}

export default Shop;
