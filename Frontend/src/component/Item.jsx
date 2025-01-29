import React from 'react';
import { Button } from 'react-bootstrap';

const Item = ({ name, description, price }) => {
  return (
    <tr style={{ textAlign: 'center', borderBottom: '1px solid #ddd' }}>
      <td style={{ padding: '10px' }}>{name}</td>
      <td style={{ padding: '10px' }}>{description}</td>
      <td style={{ padding: '10px' }}>${price}</td>
      <td style={{ padding: '10px' }}>
        <input 
          type="number" 
          min="1" 
          defaultValue="1" 
          style={{ width: '60px', textAlign: 'center', borderRadius: '5px', border: '1px solid #ccc' }} 
        />
      </td>
      <td style={{ padding: '10px' }}>
        <Button variant="primary" style={{ padding: '5px 10px', borderRadius: '5px' }}>
          Add to Cart
        </Button>
      </td>
    </tr>
  );
};

export default Item;
