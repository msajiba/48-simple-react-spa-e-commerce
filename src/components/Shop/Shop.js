import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);


    useEffect(()=> {
        const storedCart = getStoreCart();
        const saveCart = []
        for (const id in storedCart) {
            const addProduct = products.find(product => product.id === id)
            if(addProduct){
                const quantity =storedCart[id];
                addProduct.quantity = quantity;
                saveCart.push(addProduct);
            }
            setCart(saveCart);
        }   
    },[products]); 

     
    

    const handleAddCart = (selectedProduct) => {

        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }  
        setCart(newCart);
        addToDb(selectedProduct.id)
    }
  
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product=> <Product 
                        key={product.id}
                        product={product}
                        handleAddCart={handleAddCart}
                        ></Product> )
                }            
            </div>
            <div className="cart-container">
                <Cart cart={cart}> </Cart>
            </div>
        </div>
    );
};

export default Shop;