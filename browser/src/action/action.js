/**
 * action
 */
import {Modal} from 'antd';
import {browserHistory} from 'react-router';

// main sider
export const GET_SIDER='GET_SIDER';
export const getSider=(siders) => {
    return {
        type:GET_SIDER,
        siders
    };
};
export const fetchSiders=() => {
    return (dispatch,getState) => {
        fetch('http://localhost:8080/comment/getSiders',{
            method:'POST'
        }).then((response)=>{
            if (response.ok){
                return response.json();
            }
        }).then((data)=>{
            dispatch(getSider(data));
        }).catch((e)=>{
            console.log(e.message);
        });
    };
};


// comment list
export const GET_ALL_COMMENTS='GET_ALL_COMMENTS';
export const getAllComments=(comments) => {
    return {
        type:GET_ALL_COMMENTS,
        comments
    };
};
export const fetchAllComments=()=>{
    return (dispatch,getState)=>{
        fetch('http://localhost:8080/comment/getAllComment',{
            method:'POST'
        }).then((response)=>{
            if (response.ok){
                return response.json();
            }
        }).then((data)=>{
            dispatch(getAllComments(data));
        }).catch((e)=>{
            console.log(e.message);
        });
    };
};

// comment detail
export const GET_COMMENT_BY_ID='GET_COMMENT_BY_ID';
export const getCommentById=(comment)=>{
    return {
        type:GET_COMMENT_BY_ID,
        comment
    };
};
export const fetchCommentById=(id)=>{
    return (dispatch,getState)=>{
        fetch('http://localhost:8080/comment/getCommentDetail',{
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
        fetch('http://localhost:8080/review/getReviewsById',{
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
        fetch('http://localhost:8080/review/addReview',{
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

// user
export const LOGIN_USER='LOGIN_USER';
export const loginUser=(user)=>{
    return {
        type:LOGIN_USER,
        user
    };
};
export const doLogin=(user)=>{
    return (dispatch,getState)=>{
        fetch('http://localhost:8080/user/login',{
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
      fetch('http://localhost:8080/comment/postBlog',{
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
            content:'发表失败，请重试!'
          });
        }
        else{
          const modal=Modal.success({
            title:'成功',
            content:'发表成功!'
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

//users add
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const getAllUsers=(users)=>{
  return {
    type: GET_ALL_USERS,
    users
  };
};
export const fetchAllUsers=()=>{
  return (dispatch) => {
    fetch('http://localhost:8080/user/getAllUsers',{
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