import React from 'react';
import {props} from "../../interfaces";
import './Post.css';
import {Link} from "react-router-dom";

const Post = (props: props) => {
    return (
        <Link to={`/${props._id}`}>
            <div className="post">
                <h1>{props.title}</h1>
                <h3>{new Date(props.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</h3>
                <p>{props.body}</p>
            </div>
        </Link>
    );
};

export default Post;