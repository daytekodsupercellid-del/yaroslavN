import React from 'react';

function About() {
  return (
    <div className="page-content">
      <h2>About Us</h2>
      <p>
        This is the About page of our React Router practice application.
      </p>
      <p>
        React Router DOM is a library for routing in React applications. 
        It allows you to create single-page applications with navigation without the page refreshing.
      </p>
      <p>
        <strong>Key Features of React Router:</strong>
      </p>
      <ul style={{ textAlign: 'left', display: 'inline-block' }}>
        <li>Dynamic route matching</li>
        <li>Location transition handling</li>
        <li>Lazy code loading</li>
        <li>Dynamic route requests</li>
        <li>Server-side rendering</li>
      </ul>
      <p style={{ marginTop: '2rem' }}>
        Feel free to explore the other pages using the navigation links above!
      </p>
    </div>
  );
}

export default About;
