import React from 'react';
import Item from './Item';
import { Container, Table } from 'react-bootstrap';

const ItemList = () => {
  const itemList = [
    { name: 'Sahil', description: 'New product', price: 200 },
    { name: 'Harsha', description: 'New product 2', price: 100 }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
      <Container
        style={{
          backgroundColor: 'yellowgreen',
          maxWidth: '900px',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Table striped bordered hover responsive>
          <thead style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {itemList.map((item, index) => (
              <Item key={index} name={item.name} description={item.description} price={item.price} />
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ItemList;
