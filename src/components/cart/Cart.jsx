import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)
    let total=0;
    let shippingPrice=0;
    for(const product of cart){
        total = total + product.price;
        shippingPrice = shippingPrice + product.shipping;
    }
    let tax=total*7/100;
    let grandTotal=total+shippingPrice+tax;
    return (
        <div>
            <h4>Order Summary</h4>
             <p>Selected Items: {cart.length}</p>
             <p>Total Price:{total}</p>
             <p>Total Shipping:{shippingPrice.toFixed(2)}</p>
             <p>Tax:{tax}</p>
             <h6>Grand Total:{grandTotal}</h6>
        </div>
    );
};

export default Cart;