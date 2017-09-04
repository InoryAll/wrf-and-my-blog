/**
 * 路由 routers
 */
import React from 'react';
import {Router,Route,IndexRoute,browserHistory,Redirect,IndexRedirect} from 'react-router';
import App from "../App";
import Main from "../common/components/Main";
import Comment from "../common/components/Comment";
import Detail from  "../article/Detail";

export const routers=(
    <Router history={browserHistory}>
        <Route path="/" components={App}>
            <IndexRedirect to="/index"/>
        </Route>
        <Route path="/index" components={Main}>
            <IndexRoute components={Comment}/>
            <Route path="/detail/:id" components={Detail}/>
        </Route>
    </Router>
);