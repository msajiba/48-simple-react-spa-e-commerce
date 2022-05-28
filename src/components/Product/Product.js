import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    const {handleAddCart, product} = props;

    const {name, img, price,seller,ratings,} = product;



    return (
        <div className='product'>
            <img src={img} alt="" />
          <div className="product-info">
                <p className='product-name'>{name} </p>
                <p>Price: $ {price} </p>
                <p> Seller : {seller} </p>
                <p> Ratting:{ratings} stars </p>
          </div>
          <button onClick={()=> handleAddCart(product)} className='button-cart'> 
                <p> Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
    );
};

export default Product;