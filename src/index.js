import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

export let installPromptEvent;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome <= 67 from automatically showing the prompt
  event.preventDefault();
  installPromptEvent = event
});


