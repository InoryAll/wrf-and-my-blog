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
import Console from "../admin/common/Console";
import ConsoleCarousel from "../admin/common/components/ConsoleCarousel";
import BlogPost from "../admin/blog/BlogPost";

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
      <Route path="/admin/index" components={Console}>
        <IndexRoute components={ConsoleCarousel}/>
        <Route path="/admin/postBlog"  components={BlogPost}/>
      </Route>
    </Router>
);