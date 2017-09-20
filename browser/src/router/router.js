/**
 * 路由 routers
 */
import React from 'react';
import {Router,Route,IndexRoute,browserHistory,Redirect,IndexRedirect} from 'react-router';
import App from "../App";
import Main from "../user/common/Main";
import Comment from "../user/common/Comment";
import Detail from "../user/article/Detail";
import LoginContainer from "../admin/login/Login";
import Wrapper from "../admin/wrapper/Wrapper";

export const routers=(
    <Router history={browserHistory}>
        <Route path="/" components={App}>
            <IndexRedirect to="/index"/>
        </Route>
        <Route path="/index" components={Main}>
            <IndexRoute components={Comment}/>
            <Route path="/detail/:id" components={Detail}/>
        </Route>
        <Route path="/admin" components={Wrapper}>
            <IndexRoute components={LoginContainer}/>
            <Route path="login" components={LoginContainer}/>
        </Route>
    </Router>
);