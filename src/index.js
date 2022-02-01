import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Header from './header.js';
import App from './app.js';
import Footer from './footer.js';

ReactDOM.render(<Header />, document.getElementById("header-react"));
ReactDOM.render(<App />, document.getElementById("root-react"));
ReactDOM.render(<Footer />, document.getElementById("footer-react"));
