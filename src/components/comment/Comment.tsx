import React from 'react';

import {comment} from "../../interfaces";

const Comment = (props: comment) => {
    return (
        <div className="comment">
            <h3 className="comment-body">{props.body}</h3>
            <p className="comment-date">{new Date(props.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</p>
        </div>
    );
};

export default Comment;