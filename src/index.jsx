import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// bootstrap table
import 'bootstrap-table/dist/bootstrap-table.min.css'
import 'bootstrap-table/dist/themes/materialize/bootstrap-table-materialize.min.css'
import 'bootstrap-table/dist/extensions/fixed-columns/bootstrap-table-fixed-columns.min.css'
import 'bootstrap-table/dist/bootstrap-table.js'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);