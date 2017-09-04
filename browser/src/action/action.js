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


// comment
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