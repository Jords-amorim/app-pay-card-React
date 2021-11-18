import React from 'react';
import ReactDOM from 'react-dom';
import './presentation/index.css';

import CardUser from './presentation/components/cardUser/cardUser';

ReactDOM.render(
  <div className="App">
    <CardUser />
  </div>,
  document.getElementById('root')
);