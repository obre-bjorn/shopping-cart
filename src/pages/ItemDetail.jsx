import { useOutletContext, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';


const ItemDetail = () => {
    
    const { itemid } = useParams();

    const[item,setItem] = useState(null);
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    
    useEffect(()=>{
         const fetchData = async () =>{


                try{
                    
                    const response  = await  fetch(`https://fakestoreapi.com/products/${itemid}`,{mode:'cors'})
                        
                    const data = await response.json()
                   setItem(data)
                    
                }catch(error){
                    console.log('Error ', error )
                    setError(true)
                }finally{
                    setLoading(false)
                }
                    
                
        
                    
                    
                
            } 
            
            fetchData()

        return ()=> {
            console.log('It has been removed')
        }


    },[itemid])

    // const selectedItem = items.find(item => item.id === parseInt(itemid))
    
    // if(!selectedItem){

    //     return (

    //         <h1>Item not available</h1>
    //     )
    // }

    return (
        <div>
            {loading && <h1>Loading</h1>}
            {error && <h1> Item not available</h1>}
            {item && <h1>Item{item.title}</h1>}
            
        </div>
    );
};


ItemDetail.propTypes = {
    item: PropTypes.object
};


export default ItemDetail;
