import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)
    let total=0;
    let shippingPrice=0;
    let quantity=0;
    for(const product of cart){
        product.quantity=product.quantity || 1;
        total = total + product.price * product.quantity;
        shippingPrice = shippingPrice + product.shipping;
        quantity=quantity+product.quantity;
    }
    let tax=total*7/100;
    let grandTotal=total+shippingPrice+tax;
    return (
        <div>
            <h4>Order Summary</h4>
             <p>Selected Items: {quantity}</p>
             <p>Total Price:{total.toFixed(2)}</p>
             <p>Total Shipping:{shippingPrice.toFixed(2)}</p>
             <p>Tax:{tax.toFixed(2)}</p>
             <h6>Grand Total:{grandTotal}</h6>
        </div>
    );
};

export default Cart;