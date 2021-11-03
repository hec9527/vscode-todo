import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from './stores';
import App from './app';
import './assets/fonts/iconfont.css';

render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);

// window.addEventListener('message', (msg: { data: any }) => {
//     console.log(msg);
//     const code = window.acquireVsCodeApi();
//     console.log(code);
// });
