
import PropTypes from 'prop-types';
import { useEffect,useState } from 'react';

import itemViewStyles from './ItemView.module.css'
import { useParams } from 'react-router-dom';



const ItemsView = () => {
    const {category} = useParams()


    console.log(category)

    return (
        <section className={itemViewStyles.container}>
            <h1>Items to be Displayed</h1>
        </section>
    );
};


ItemsView.propTypes = {
    
};


export default ItemsView;
