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
import Error from "../404/Error";
import CommentList from "../admin/commentManage/CommentList";
import UserList from "../admin/userManege/UserList";
import MessageBoard from "../user/message/MessageBoard";

export const routers=(
    <Router history={browserHistory}>
      <Route path="/" components={App}>
          <IndexRedirect to="/index"/>
      </Route>
      <Route path="/index" components={Main}>
          <IndexRoute components={Comment}/>
          <Route path="/detail/:id" components={Detail}/>
          <Route path="/messageBoard" components={MessageBoard} />
      </Route>
      <Route path="/admin" components={Wrapper}>
        <IndexRoute components={LoginContainer}/>
        <Route path="login" components={LoginContainer}/>
      </Route>
      <Route path="/admin/index" components={Console}>
        <IndexRoute components={ConsoleCarousel}/>
        <Route path="/admin/postBlog"  components={BlogPost}/>
        <Route path="/admin/commentManage">
            <Route path="commentList" components={CommentList}/>
        </Route>
        <Route path="/admin/userManage">
          <Route path="userList" components={UserList}/>
        </Route>
      </Route>
      <Route path="*" components={Error}/>
    </Router>
);