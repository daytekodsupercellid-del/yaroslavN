import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="error-page">
      <h2>404 - Page Not Found</h2>
      <p>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <p style={{ fontSize: '4rem', marginTop: '2rem' }}>😕</p>
      <p>
        Don't worry, you can always navigate back to the home page using the menu above,
        or click the button below.
      </p>
      <Link to="/" className="back-link">Go to Home Page</Link>
    </div>
  );
}

export default NotFound;
