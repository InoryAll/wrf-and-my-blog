import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import {routers} from './router/router';
import store from './store/store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App>
            {routers}
        </App>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
