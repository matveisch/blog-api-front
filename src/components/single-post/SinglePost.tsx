import React, { useEffect, useRef, useState } from 'react';
import './SinglePost.css';
import {post} from "../../interfaces";
import {useParams} from "react-router-dom";
import Comment from "../comment/Comment";

const SinglePost = () => {
    const {id} = useParams();
    const [post, setPost] = useState<post>();
    const [comment, setComment] = useState({
        body: ''
    });
    const commentBody = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        async function getPost() {
            const data = await fetch(`http://localhost:4000/posts/${id}`);
            const post = await data.json();

            setPost(post);
        }

        getPost();
    }, [id, post?.comments]);

    async function postComment() {
        try {
            const result = await fetch(`http://localhost:4000/posts/${id}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(comment)
            });
        } catch (e) {
            if (e) console.log(e);
        }
    }

    function handleDataChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setComment(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    function handleCommentPost(e: { preventDefault: () => void; }) {
        e.preventDefault();
        postComment();
        if (commentBody.current !== null) {
            commentBody.current.value = '';
        }
    }

    if (post) {
        return (
            <div className="single-post">
                <div className="post-block">
                    <h1 className="title">{post.title} <span className="h1-span">– {new Date(post.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span></h1>
                    <p>{post.body}</p>
                </div>
                <div className="comments">
                    <h2>Comments</h2>
                    <div className="create-comment">
                        <form>
                            <div className="input-block">
                                <label htmlFor="body">New comment</label>
                                <textarea ref={commentBody} id="body" name="body" onChange={(e) => handleDataChange(e)}/>
                            </div>
                            <input type="button" value="post" onClick={handleCommentPost} />
                        </form>
                    </div>
                    {post.comments && post.comments.map((comment, index) => {
                        return(
                            <Comment body={comment.body} date={comment.date} key={index} />
                        )
                    })}
                </div>
            </div>
        );
    } else {
        return(
            <h1>loading...</h1>
        )
    }
};

export default SinglePost;