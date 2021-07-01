import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Youtube from './service/youtube';
import { BrowserRouter as Router } from 'react-router-dom';
const youtube = new Youtube();

ReactDOM.render(
  <Router>
    <App youtube={youtube} />
  </Router>,
  document.getElementById('root')
);
