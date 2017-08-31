import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import {routers} from './router/router';

ReactDOM.render(
    <App>
        {routers}
    </App>
    , document.getElementById('root'));
registerServiceWorker();
