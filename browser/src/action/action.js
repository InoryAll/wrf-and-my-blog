/**
 * actions
 */
import { Modal } from 'antd';
import { browserHistory } from 'react-router';
import { setCookie } from "../util/cookieUtil";

// main sider
export const GET_SIDER='GET_SIDER';
export const getSider=(siders) => {
    return {
        type:GET_SIDER,
        siders
    };
};
export const fetchSiders=() => {
    return (dispatch, getState) => {
        fetch('http://118.89.236.17:8080/comment/getSiders',{
            method:'POST'
        }).then((response) => {
            if (response.ok){
                return response.json();
            }
        }).then((data) => {
            dispatch(getSider(data));
        }).catch((e) => {
            console.log(e.message);
        });
    };
};


// comment list
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';
export const getAllComments= (comments) => {
    return {
        type:GET_ALL_COMMENTS,
        comments
    };
};
export const fetchAllComments = () => {
    return (dispatch, getState) => {
        fetch('http://118.89.236.17:8080/comment/getAllComment',{
            method:'POST'
        }).then((response) => {
            if (response.ok){
                return response.json();
            }
        }).then((data) => {
            dispatch(getAllComments(data));
        }).catch((e) => {
            console.log(e.message);
        });
    };
};

// comment detail
export const GET_COMMENT_BY_ID = 'GET_COMMENT_BY_ID';
export const getCommentById = (comment) => {
    return {
        type:GET_COMMENT_BY_ID,
        comment
    };
};
export const fetchCommentById=(id)=>{
    return (dispatch,getState)=>{
        fetch('http://118.89.236.17:8080/comment/getCommentDetail',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:id})
        }).then((response)=>{
            if (response.ok){
                return response.json();
            }
        }).then((data)=>{
            dispatch(getCommentById(data));
        }).catch((e)=>{
            console.log(e.message);
        });
    };
};

// reviews
export const GET_REVIEWS_BY_ID='GET_REVIEWS_BY_ID';
export const getReviewsById=(reviews)=>{
    return {
        type:GET_REVIEWS_BY_ID,
        reviews
    };
};
export const fetchReviewsById=(id)=>{
    return (dispatch,getState)=>{
        fetch('http://118.89.236.17:8080/review/getReviewsById',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:id})
        }).then((response)=>{
            if (response.ok){
                return response.json();
            }
        }).then((data)=>{
            dispatch(getReviewsById(data));
        }).catch((e)=>{
            console.log(e.message);
        });
    };
};

export const ADD_REVIEW='ADD_REVIEW';
export const addReview=(review)=>{
    return {
        type:ADD_REVIEW,
        review
    };
};
export const fetchAddReview=(review)=>{
    return (dispatch,getState)=>{
        fetch('http://118.89.236.17:8080/review/addReview',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(review)
        }).then((response)=>{
            if (response.ok){
                return response.json();
            }
        }).then((data)=>{
            if (data.code==='0'){
                Modal.error({
                    title:'失败',
                    content:data.message
                });
            }
            else{
                const modal=Modal.success({
                    title:'成功',
                    content:data.message
                });
                setTimeout(()=>{
                    modal.destroy();
                },1000);
                dispatch(addReview(review));
                fetchReviewsById(review.comment);
            }
        }).catch((e)=>{
            console.log(e.message);
        });
    };
};

// user login
export const LOGIN_USER='LOGIN_USER';
export const loginUser=(user)=>{
    return {
        type:LOGIN_USER,
        user
    };
};
export const doLogin=(user)=>{
    return (dispatch,getState)=>{
        fetch('http://118.89.236.17:8080/user/login',{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        }).then((response)=>{
            if (response.ok){
                return response.json();
            }
        }).then((data)=>{
            if (data.length===0){
                Modal.error({
                  title:'错误',
                  content:'用户不存在，请联系管理员!'
                });
            }
            else{
                setCookie('username',user.username);
                setCookie('password',user.password);
                dispatch(loginUser(user));
                const modal=Modal.success({
                  title:'成功',
                  content:`欢迎你${user.username}用户!`
                });
               setTimeout(()=>{
                   modal.destroy();
                   browserHistory.push('/admin/index');
               },1000);
            }
        }).catch((e)=>{
            console.log(e.message);
        });
    };
};

// comment add
export const ADD_COMMENT='ADD_COMMENT';
export const addComment=(comment)=>{
    return {
      type:ADD_COMMENT,
      comment
    };
};
export const fetchComment=(comment)=>{
    return (dispatch,getState)=>{
      fetch('http://118.89.236.17:8080/comment/postBlog',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(comment)
      }).then((response)=>{
        if (response.ok){
          return response.json();
        }
      }).then((data)=>{
        if (data.code==='0'){
          Modal.error({
            title:'错误',
            content:data.message,
          });
        }
        else{
          const modal=Modal.success({
            title:'成功',
            content:data.message,
          });
          setTimeout(()=>{
            dispatch(addComment(comment));
            modal.destroy();
          },1000);
        }
      }).catch((e)=>{
        console.log(e.message);
      });
    };
};

//users getAll
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const getAllUsers=(users)=>{
  return {
    type: GET_ALL_USERS,
    users
  };
};
export const fetchAllUsers=()=>{
  return (dispatch,getState) => {
    fetch('http://118.89.236.17:8080/user/getAllUsers',{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data)=>{
      dispatch(getAllUsers(data));
    }).catch((e)=>{
      console.log(e.message);
    });
  };
};

//comment update
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment = (comment)=>{
  return {
    type: UPDATE_COMMENT,
    comment
  };
};
export const fetchUpdateComment = (comment) => {
  return (dispatch,getState)=>{
    fetch('http://118.89.236.17:8080/comment/updateComment',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(comment)
    }).then((response)=>{
      if (response.ok) {
        return response.json();
      }
    }).then((data)=>{
      if (data.code === '0') {
        Modal.error({
          title: '错误',
          content: data.message,
        });
      }
      else {
        const modal = Modal.success({
          title: '成功',
          content: data.message,
        });
        setTimeout(()=>{
          dispatch(updateComment(data));
          modal.destroy();
        },1000);
        fetchAllComments()(dispatch,getState);
      }
    }).catch((e)=>{
      console.log(e.message);
    });
  };
};

//comment delete
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (comment)=>{
  return {
    type: DELETE_COMMENT,
    comment
  };
};
export const fetchDeleteComment = (comment)=>{
  return (dispatch, getState) => {
    fetch('http://118.89.236.17:8080/comment/deleteComment',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id:comment._id}),
    }).then((response)=>{
      if (response.ok) {
        return response.json();
      }
    }).then((data)=>{
      if (data.code === '0') {
        Modal.error({
          title: '错误',
          content: data.message,
        });
      }
      else {
        const modal = Modal.success({
          title: '成功',
          content: data.message,
        });
        setTimeout(()=>{
          dispatch(deleteComment(comment));
          modal.destroy();
        },1000);
        fetchAllComments()(dispatch,getState);
      }
    }).catch((e)=>{
      console.log(e.message);
    });
  };
};

//user update
export const USER_UPDATE = 'USER_UPDATE';
export const userUpdate = (user) => {
  return {
    type: USER_UPDATE,
    user
  };
};
export const fetchUpdateUser = (user) => {
  return (dispatch, getState) => {
    fetch('http://118.89.236.17:8080/user/updateUser',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      if (data.code === '0') {
        Modal.error({
          title: '错误',
          content: data.message,
        });
      }
      else {
        const modal = Modal.error({
          title: '成功',
          content: data.message,
        });
        setTimeout(() => {
          dispatch(userUpdate(user));
          modal.destroy();
        },1000);
        fetchAllUsers()(dispatch, getState);
      }
    }).catch((e) => {
      console.log(e.message);
    });
  };
};

//user delete
export const USER_DELETE = 'USER_DELETE';
export const userDelete = (user) => {
  return {
    type: USER_DELETE,
    user
  };
};
export const fetchDeleteUser = (user) => {
  return (dispatch,getState) => {
    fetch('http://118.89.236.17:8080/user/deleteUser',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: user._id}),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      if (data.code === '0') {
        Modal.error({
          title: '错误',
          content: data.message,
        });
      }
      else {
        const modal = Modal.success({
          title: '成功',
          content: data.message,
        });
        setTimeout(() => {
          dispatch(userDelete(user));
          modal.destroy();
        },1000);
        fetchAllUsers()(dispatch,getState);
      }
    }).catch((e) => {
      console.log(e.message);
    });
  };
};

// user check
export const CHECK_USER = 'CHECK_USER';
export const checkUser = () => {
  return {
    type: CHECK_USER,
  };
};
export const checkUserById = (username, callback) => {
  return (dispatch, getState) => {
    fetch('http://118.89.236.17:8080/user/getUserDetail',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username}),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      dispatch(checkUser());
      callback(data);
    }).catch((e) => {
      console.log(e.message);
    });
  };
};

// user add
export const ADD_USER = 'ADD_USER';
export const addUser = (user) => {
  return {
    type: ADD_USER,
    user
  };
};
export const fetchAddUser = (user) => {
  return (dispatch, getState) => {
    fetch('http://118.89.236.17:8080/user/addUser',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      if (data.code === '0') {
        Modal.error({
          title: '错误',
          content: data.message,
        });
      }
      else {
        const modal = Modal.success({
          title: '成功',
          content: data.message,
        });
        setTimeout(()=>{
          dispatch(addUser(user));
          modal.destroy();
        },1000);
        fetchAllUsers()(dispatch,getState)
      }
    }).catch((e)=>{
      console.log(e.message);
    });
  };
};

// boards get
export const BOARD_SEARCH = 'BOARD_SEARCH';
export const boardSearch = (boards) => {
  return {
    type: BOARD_SEARCH,
    boards,
  };
};
export const fetchAllBoards = () => {
  return (dispatch, getState) => {
    fetch('http://118.89.236.17:8080/board/getAllboards',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      dispatch(boardSearch(data));
    }).catch((e) => {
      console.log(e.message);
    });
  };
};

// boards add
export const BOARD_ADD = 'BOARD_ADD';
export const boardAdd = (board) => {
  return {
    type: BOARD_ADD,
    board,
  };
};
export const fetchAddBoard = (board) => {
  return (dispatch, getState) => {
    fetch('http://118.89.236.17:8080/board/addBoard',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(board),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      if (data.code === '0') {
        Modal.error({
          title: '错误',
          content: data.message,
        });
      }
      else {
        const modal = Modal.success({
          title: '成功',
          content: data.message,
        });
        setTimeout(() => {
          dispatch(boardAdd(board));
          modal.destroy();
        },1000);
        fetchAllBoards()(dispatch, getState);
      }
    }).catch((e) => {
      console.log(e.message);
    });
  };
};