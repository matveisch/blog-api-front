import React, {useEffect, useState} from 'react';
import './SinglePost.css';
import {post} from "../../interfaces";
import {useParams} from "react-router-dom";

const SinglePost = () => {
    const {id} = useParams();
    const [post, setPost] = useState<post>();

    useEffect(() => {
        async function getPost() {
            const data = await fetch(`http://localhost:4000/posts/${id}`);
            const post = await data.json();

            setPost(post);
        }

        getPost();
    }, [id]);

    if (post) {
        return (
            <div className="single-post">
                <div className="post">
                    <h1>{post.title}</h1>
                    <h3>{new Date(post.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</h3>
                    <p>{post.body}</p>
                </div>
                <div className="comments">
                    {post.comments && post.comments.map((comment, index) => {
                        return(
                            <div className="comment" key={index}>
                                <p>{comment.body}</p>
                                <p>{new Date(comment.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</p>
                            </div>
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