import React, { useContext, useRef } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import itemContent from '../store/item-content';

const AddItemForm = () => {

  const nameInputRef=useRef();
  const descriptionInputRef=useRef();
  const priceInputRef=useRef();

  const itemCtx=useContext(itemContent);

  const submitHandler=(event)=>{
    event.preventDefault();
    const item={
      name:nameInputRef.current.value,
      description:descriptionInputRef.current.value,
      price:priceInputRef.current.value
    }
    itemCtx.addToItem(item);

  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Container
        style={{
          border: '2px solid #f1f1f1',
          borderRadius: '8px',
          marginTop:"30px",
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '800px',
          backgroundColor: '#fff',
        }}
      >
        <Form>
          <Row className="justify-content-between" style={{ display: 'flex' }}>
            {/* First Column */}
            <Col sm={12} md={4} style={{ marginBottom: '15px' }}>
              <Form.Group as={Row} controlId="itemName">
                <Form.Label column sm="4" style={{ fontWeight: '600' }}>
                  Item Name:
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    placeholder="Enter item name"
                    style={{ borderRadius: '5px', padding: '8px' }}
                    ref={nameInputRef}
                  />
                </Col>
              </Form.Group>
            </Col>

            {/* Second Column */}
            <Col sm={12} md={4} style={{ marginBottom: '15px' }}>
              <Form.Group as={Row} controlId="itemDescription">
                <Form.Label column sm="4" style={{ fontWeight: '600' }}>
                  Item Description:
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    placeholder="Enter item description"
                    style={{ borderRadius: '5px', padding: '8px' }}
                    ref={descriptionInputRef}
                  />
                </Col>
              </Form.Group>
            </Col>

            {/* Third Column */}
            <Col sm={12} md={4} style={{ marginBottom: '15px' }}>
              <Form.Group as={Row} controlId="itemPrice">
                <Form.Label column sm="4" style={{ fontWeight: '600' }}>
                  Item Price:
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="number"
                    placeholder="Enter item price"
                    style={{ borderRadius: '5px', padding: '8px' }}
                  ref={priceInputRef}
                  />
                </Col>
              </Form.Group>
            </Col>
          </Row>

          <Button
            type="submit"
            variant="primary"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
              backgroundColor: '#007bff',
              border: 'none',
            }}
          onClick={submitHandler} >
            Add Item
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddItemForm;
