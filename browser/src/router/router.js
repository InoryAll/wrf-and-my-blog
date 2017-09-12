/**
 * 路由 routers
 */
import React from 'react';
import {Router,Route,IndexRoute,browserHistory,Redirect,IndexRedirect} from 'react-router';
import App from "../App";
import Main from "../user/common/Main";
import Comment from "../user/common/Comment";
import Detail from "../user/article/Detail";
import Login from "../admin/login/Login";

export const routers=(
    <Router history={browserHistory}>
        <Route path="/" components={App}>
            <IndexRedirect to="/index"/>
        </Route>
        <Route path="/index" components={Main}>
            <IndexRoute components={Comment}/>
            <Route path="/detail/:id" components={Detail}/>
        </Route>
        <Route path="/admin">
            <IndexRoute components={Login}/>
            <Route path="login" components={Login}/>
        </Route>
    </Router>
);