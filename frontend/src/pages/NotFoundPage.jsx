import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, we couldn't find what you were looking for.</p>
    <Link to="/">Go back to Dashboard</Link>
  </div>
);

export default NotFoundPage;