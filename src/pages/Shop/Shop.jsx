import { useState, useEffect } from "react";
import PropTypes from 'prop-types'

import styles from './Shop.module.css'
import { Link, Outlet } from "react-router-dom";

const Shop = ( ) => {

    
    const [categories, setCategories] = useState(null)
    const [loading, setLoading] = useState([true])

    useEffect(()=>{
       
            const fetchData = async () =>{

                try {
                    const categoryData = await fetch('https://fakestoreapi.com/products/categories').then(res => res.json())
                    

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

    

     
     
    return (
        <div>
            
            <h1>Available Items</h1>

            <div className={styles.container}>
            {loading && <h1>Loading categories...</h1>}
            {categories && categories.map((category,index)=> {

                return(
                    <Link to={`${category}`} key = {index}> 
                        <h1 > {category} </h1>
                    </Link>
                    )
                })
            }
                
            <Outlet/>
            </div>

        </div>
    );
}

Shop.propTypes={
    setCart: PropTypes.func
}

export default Shop;
