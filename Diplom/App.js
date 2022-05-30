import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './Pages/PagesRouter';

ReactDOM.render(
  <BrowserRouter>
    <PagesRouter />
  </BrowserRouter>
  , document.getElementById('container')
);