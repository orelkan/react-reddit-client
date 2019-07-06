import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const devMode = false;

if (devMode) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

ReactDOM.render(<App/>,document.getElementById('root'));
