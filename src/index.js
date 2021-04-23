import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './Components/Entry';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Entry />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();