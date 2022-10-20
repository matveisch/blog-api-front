import React, {Dispatch, SetStateAction} from 'react';
import './Comment.css';
import {comment} from "../../interfaces";
import {useParams} from "react-router-dom";

interface Props {
    body: string;
    date: Date;
    _id?: string;
    setCommentPosted: Dispatch<SetStateAction<boolean>>;
}

const Comment = (props: Props) => {
    const {id} = useParams();

    async function deleteComment() {
        try {
            await fetch(`http://localhost:4000/posts/${id}/comments/${props._id}`, {
                method: 'DELETE',
            });

            props.setCommentPosted(true);
        } catch (e) {
            if (e) console.log(e);
        }
    }

    function handleDelete(e: { preventDefault: () => void; }) {
        e.preventDefault();
        deleteComment();
    }

    return (
        <div className="comment">
            <h3 className="comment-body">{props.body}</h3>
            <div className="comment-details">
                {localStorage.getItem('token') ? <button onClick={handleDelete}>delete</button> : null}
                <p className="comment-date">{new Date(props.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</p>
            </div>
        </div>
    );
};

export default Comment;