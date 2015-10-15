window.$ = window.jQuery = require('jquery');
require('bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';
import App from './components/App';

$(() => {
  let router = new Router();

  ReactDOM.render(
    <App router={router} />,
    document.getElementById('app')
  );
});
