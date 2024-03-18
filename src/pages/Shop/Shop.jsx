import { useState, useEffect } from "react";
import PropTypes from 'prop-types'

import Item from "../../components/Item";
import styles from './Shop.module.css'
import { Outlet } from "react-router-dom";

const Shop = ( {setCart}) => {

    const [items, setItems] = useState (null)
    const [categories, setCategories] = useState(null)
    const [loading, setLoading] = useState([true])

    useEffect(()=>{
       
            const fetchData = async () =>{

                try {
                    const [ itemsData,categoryData] = await Promise.all([
                        fetch('https://fakestoreapi.com/products/').then(res => res.json()),
                        fetch('https://fakestoreapi.com/products/categories').then(res => res.json())
                    ])

                    setItems(itemsData)
                    setCategories(categoryData)
                    // console.log('Category ', categoryData)
                    
                } 
                catch (error) {

                    console.log(error)
                    
                }
                finally{

                    setLoading(false)
            
                }
                
            } 
            
            fetchData()

        return ()=> {
            console.log('It has been removed')
        }
    },[])

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

                
                <Outlet/>
            </div>

        </div>
    );
}

Shop.propTypes={
    setCart: PropTypes.func
}

export default Shop;
