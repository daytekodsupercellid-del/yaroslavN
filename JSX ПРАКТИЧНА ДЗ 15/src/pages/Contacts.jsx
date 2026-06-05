import React from 'react';
import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <div className="page-content">
      <h2>Contact Us</h2>
      <p>
        This is the Contacts page where you can find information about how to reach us.
      </p>
      <div style={{ margin: '2rem 0', textAlign: 'left', display: 'inline-block' }}>
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
      </div>
      <hr style={{ margin: '2rem 0' }} />
      <p>
        Want to see how dynamic routes work? Try viewing a product:
      </p>
      <ul className="products-list">
        <li><Link to="/product/1">Product 1</Link></li>
        <li><Link to="/product/2">Product 2</Link></li>
        <li><Link to="/product/3">Product 3</Link></li>
      </ul>
    </div>
  );
}

export default Contacts;
