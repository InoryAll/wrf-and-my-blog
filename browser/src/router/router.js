/**
 * 路由 routers
 */
import React from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import App from "../App";
import Main from "../common/components/Main";

export const routers=(
    <Router history={browserHistory}>
        <Route path="/" components={App}>
            <IndexRoute components={Main}/>
        </Route>
    </Router>
);