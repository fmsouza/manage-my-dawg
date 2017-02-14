import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Header from './header';

export default props => (
  <div>
    <header>
      <Header />
    </header>
    <div className="container">
      {props.children}
    </div>
  </div>
);
