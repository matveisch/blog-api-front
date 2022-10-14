import React from 'react';
import {props} from "../../interfaces";
import './Post.css';

const Post = (props: props) => {
    return (
        <div className="post">
            <h1>{props.title}</h1>
            <h3>{new Date(props.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</h3>
            <p>{props.body}</p>
        </div>
    );
};

export default Post;