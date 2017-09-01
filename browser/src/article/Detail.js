/**
 * 文章具体信息组件 detail
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class Detail extends React,Comment{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1></h1>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <p></p>
            </div>
        );
    }
}
