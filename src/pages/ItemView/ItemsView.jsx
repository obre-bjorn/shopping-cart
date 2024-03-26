
import PropTypes from 'prop-types';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

import itemViewStyles from './ItemView.module.css'
import Item from "../../components/Item";




const ItemsView = ({cart, setCart}) => {
    const {category} = useParams()
    const [items,setItems] = useState(null);
    const[isError,setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    

    useEffect (()=>{
        setIsLoading(true)
        setItems(null)

        const fetchData = async () =>{
            try {

                let url = 'https://fakestoreapi.com/products'

                if(category){
                    url = url + `/category/${category}`
                }
                
                const response = await fetch(url)

                const data =  await response.json()
                
                setItems(data)

            } catch (error) {

                console.log('Error ', error)
                setError(true)

            }finally{

                setIsLoading(false)

            }

    }
    fetchData()

    },[category])


     function handleAddCart(id){


        let inputQuantity = parseInt(document.querySelector(`#item${id}`).value)

        // console.log('Input Quantity ',inputQuantity)
        // console.log('Cart ',cart)

        items.forEach(item => {
            if(item.id === id){
               
                const itemExistsInCart = cart.find(cartItem => cartItem.id == id) !== undefined
                console.log('Item exists ', itemExistsInCart)
                

                if (itemExistsInCart){  
                    setCart(cart.map(cartItem=> {
                        if(cartItem.id == id){
                            return {
                                ...cartItem,
                                quantity: cartItem.quantity += inputQuantity
                            }
                        }
                        return cartItem
                    }))
                    
                }else{
                    console.log('Cart ', cart)
                    const selectedItem = {
                        id: item.id,
                        title: item.title,
                        quantity: inputQuantity
                    }
                    setCart( prev => [...prev,selectedItem])
                    
                }

            }
        })

     }

     

    return (
        <section className={itemViewStyles.container}>
            {isLoading && <h1>Loading items...</h1>}
            {isError && <h1>Something went Wrong</h1>}
            {!isError && items && (
            items.length > 0 ? (
                items.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                        handleAddCart={handleAddCart}
                    />
                ))
            ) : (
                <h1>Items not found</h1>
            )
        )}
        </section>
    );
};


ItemsView.propTypes = {
    
};


export default ItemsView;
