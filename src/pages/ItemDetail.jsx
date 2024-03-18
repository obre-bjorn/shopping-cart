import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({setCart}) => {
    
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


    return (
        <div>
            {loading && <h1>Loading</h1>}
            {error && <h1> Item not available</h1>}
            {item && <h1>{item.title}</h1>}
            
        </div>
    );
};


ItemDetail.propTypes = {
    item: PropTypes.object
};


export default ItemDetail;
