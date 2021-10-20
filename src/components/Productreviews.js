import React from 'react';
import '../styles/Productreviews.css';
import ProductreviewCard from './ProductreviewCard';

const Productreviews = ({productreviews}) => {
    return (
        <div className="Productreviews">
            {productreviews.map((item,index)=>(
                <ProductreviewCard price={item.price} name ={item.name} image={item.image} review={item.review} index={index} ley={item.image}       />
            ))}
            
        </div>
    )
}

export default Productreviews
