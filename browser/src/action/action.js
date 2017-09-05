/**
 * action
 */
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

//comment detail
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
export const GET_REVIEWS='GET_REVIEWS';
export const getReviews=(reviews)=>{
    return {
        type:GET_REVIEWS,
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
            dispatch(getReviews(data));
        }).catch((e)=>{
            console.log(e.message);
        });
    };
};