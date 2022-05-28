import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const {cart} = props;


        let total = 0;
        let shipping = 0;
        let quantity = 0;
        for(const product of cart){
            quantity = quantity + product.quantity;
            total = total + product.price * product.quantity;
            shipping = shipping + product.shipping;
        }
        const tax=parseFloat((total*0.1).toFixed(2));
        const grandTotal=total+shipping+tax;
    
    // const total = cart.reduce((sum,number)=> sum + number.price * number.quantity ,(0))
    // const shipping = cart.reduce((sum, number) => sum + number.shipping, 0)
    // const quantity = cart.reduce((sum,number) => sum + number.quantity, (0));
    // const tax = parseFloat((total* 0.1).toFixed(2));
    // const grandTotal = (total + shipping + tax).toFixed(2);

     

    return (
        <div className='cart'>
            <h4> Order summary</h4>
            <p> Select Item : {quantity} </p>
            <p> Total Price : $ {total} </p>
            <p> Total Shipping:$ {shipping} </p>
            <p> Tax: $ {tax}  </p>
            <h5> Grand Total : {grandTotal} </h5>
        </div>
    );
};

export default Cart;