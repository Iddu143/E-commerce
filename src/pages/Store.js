import React, { Component,useState } from 'react'

// export class Store extends Component {
//   render() {
//     return (
//       <div>
//         this is our store page...
//       </div>
//     )
//   }
// }
// import React from 'react';
// import React, { useState } from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';

function StorePage() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      image: '/images/cam-01.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      image:  '/images/cam-02.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      image:  '/images/cam-05.jpg',
    },
    // Add more products as needed
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>Welcome to Our Store!</h1>
      <CardGroup>
        {products.map((product) => (
          <Card key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>${product.price.toFixed(2)}</Card.Text>
              <Button variant="primary" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>

      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StorePage;

