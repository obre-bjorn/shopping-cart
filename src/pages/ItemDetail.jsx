import { useOutletContext, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


const ItemDetail = () => {
    const [items] = useOutletContext()
    const { itemid } = useParams();
    
    console.log('Detail',items)
    
    const selectedItem = items.find(item => item.id === parseInt(itemid))
    
    if(!selectedItem){

        return (

            <h1>Item not available</h1>
        )
    }

    return (
        <div>
            <h1>Item{selectedItem.title}</h1>
            
        </div>
    );
};


ItemDetail.propTypes = {
    item: PropTypes.object
};


export default ItemDetail;
