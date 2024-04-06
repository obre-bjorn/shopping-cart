import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetailStyles from './ItemDetail.module.css'
import Button from '../../components/Button';

const ItemDetail = ({cart,setCart}) => {
    
    const { itemid } = useParams();

    const[item,setItem] = useState(null);
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [quantityInput, setQuantityInput] = useState(1)
    
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

    function handleQuantityChange(e){
        setQuantityInput(e.target.value)
    }

    function handleAddToCart(item){

       const quantity = parseInt(quantityInput)
        const itemExists = cart.some(cartItem =>  cartItem.id == item.id)

       if (itemExists){  
                    setCart(cart.map(cartItem=> {
                        if(cartItem.id == item.id){
                            const newQuantity = cartItem.quantity += quantity
                            return {
                                ...cartItem,
                                quantity: newQuantity,
                                cost: newQuantity * item.price,
                            }
                        }
                        return cartItem
                    }))
                    
                }else{
                    
                    const selectedItem = {
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        quantity: quantity,
                        cost: quantity * item.price
                    }
                    setCart( prev => [...prev,selectedItem])
                    
                }

    }

    return (
        <div className={ItemDetailStyles.container}>
        <div className={ItemDetailStyles.wrapper}>

            {loading && <h1>Loading...</h1>}
            {!loading && error && <h1>Item not available</h1>}
            {!loading && !error && item && (
                <>
                    <div className={ItemDetailStyles['item-image']}>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className={ItemDetailStyles['item-details']}>
                        <h1 className="item-title">{item.title}</h1>
                        <div className="item-price">${item.price}</div>
                        <div className={ItemDetailStyles['item-desc']}>{item.description}</div>
                        <input className={ItemDetailStyles.quantity} type="number" name="" id="" value={quantityInput} onChange={handleQuantityChange} min={1}/>
                        <Button label="Add to Cart" handleClick={()=> {handleAddToCart(item)}}/>
                    </div>
                </>
            )}
        </div>
        </div>
    );
};


ItemDetail.propTypes = {
    item: PropTypes.object
};


export default ItemDetail;
