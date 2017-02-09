import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Header from './header';

export default props => (
  <div>
    <Header />
    <div className="container">
      {props.children}
    </div>
  </div>
);
