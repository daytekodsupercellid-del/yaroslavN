import React from 'react';

function Home() {
  return (
    <div className="page-content">
      <h2>Welcome to Home Page</h2>
      <p>
        This is a React Router practice application demonstrating client-side routing.
      </p>
      <p>
        You can navigate through the pages using the navigation menu above. 
        Try clicking on different links to explore the application.
      </p>
      <p>
        This app includes:
      </p>
      <ul style={{ textAlign: 'left', display: 'inline-block' }}>
        <li>Home Page</li>
        <li>About Page</li>
        <li>Contacts Page</li>
        <li>Dynamic Product Routes with useParams</li>
        <li>404 Error Page for unknown routes</li>
      </ul>
    </div>
  );
}

export default Home;
