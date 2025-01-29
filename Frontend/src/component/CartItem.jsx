import React from 'react';

const CartItem = ({ name, id, price, description, quantity }) => {
  return (
    <div className="cart-item">
      <h5>{name}</h5>
      <p>{description}</p>
      <p>Price: ₹{price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default CartItem;
