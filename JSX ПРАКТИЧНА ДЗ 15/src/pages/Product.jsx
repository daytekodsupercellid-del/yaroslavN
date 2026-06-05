import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Product() {
  const { id } = useParams();

  // Sample product data
  const products = {
    1: {
      name: 'Laptop',
      price: '$999.99',
      description: 'A high-performance laptop for work and entertainment'
    },
    2: {
      name: 'Smartphone',
      price: '$699.99',
      description: 'The latest smartphone with advanced features'
    },
    3: {
      name: 'Headphones',
      price: '$199.99',
      description: 'Premium wireless headphones with noise cancellation'
    }
  };

  const product = products[id];

  if (!product) {
    return (
      <div className="page-content">
        <h2>Product Not Found</h2>
        <p>The product with ID {id} doesn't exist.</p>
        <Link to="/contacts" className="back-link">Back to Contacts</Link>
      </div>
    );
  }

  return (
    <div className="page-content">
      <h2>Product Details</h2>
      
      <div className="product-info">
        <h3 style={{ color: '#667eea' }}>Product ID: {id}</h3>
      </div>

      <div style={{ margin: '2rem 0', textAlign: 'left', display: 'inline-block' }}>
        <p><strong>Name:</strong> {product.name}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <p>
        useParams hook is used to get the product ID from the URL!
      </p>
      <p>
        The current URL is: <code>/product/{id}</code>
      </p>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/contacts" className="back-link">Back to Contacts</Link>
      </div>

      <p style={{ marginTop: '2rem' }}>
        <strong>Other Products:</strong>
      </p>
      <ul className="products-list">
        <li><Link to="/product/1">Product 1</Link></li>
        <li><Link to="/product/2">Product 2</Link></li>
        <li><Link to="/product/3">Product 3</Link></li>
      </ul>
    </div>
  );
}

export default Product;
