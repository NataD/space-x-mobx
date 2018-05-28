import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import App from './App';
import './assets/favicon.ico';

import MainStore from './stores/MainStore'

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Provider MainStore={MainStore}><App /></Provider>, document.getElementById('root'));
