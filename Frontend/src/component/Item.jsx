import React from 'react';
import { Button } from 'react-bootstrap';

const Item = ({ name, description, price }) => {
  return (
    <tr style={{ textAlign: 'center' }}>
      <td>{name}</td>
      <td>{description}</td>
      <td>${price}</td>
      <td>
        <input 
          type="number" 
          min="1" 
          defaultValue="1" 
          style={{ width: '60px', textAlign: 'center', borderRadius: '5px', border: '1px solid #ccc' }} 
        />
      </td>
      <td>
        <Button variant="primary" style={{ padding: '5px 10px', borderRadius: '5px' }}>
          Add to Cart
        </Button>
      </td>
    </tr>
  );
};

export default Item;
