import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import itemContent from '../store/item-content';
import CartItem from './CartItem';

const Cart = (props) => {
  const itemCtx = useContext(itemContent);
  const cartList = itemCtx.cart;

  return (
    <Modal show={props.show} onHide={props.hide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="cart-container">
          {cartList.length > 0 ? (
            cartList.map((item, index) => (
              <CartItem
                key={index}
                id={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                quantity={item.quantity}
              />
            ))
          ) : (
            <p className="empty-cart">Your cart is empty.</p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.hide}>Close</Button>
        {cartList.length > 0 && <Button variant="success">Order Now</Button>}
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
