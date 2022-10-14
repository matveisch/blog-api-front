import React, {useEffect, useState} from 'react';
import './App.css';

import Post from "./components/post/Post";

import {props} from "./interfaces";

function App() {
  const [posts, setPosts] = useState<props[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetch('http://localhost:4000/posts', {
        headers: {
          ContentType: 'application/json'
        }
      });

      const data = await result.json();

      setPosts(data);
    }

    getData();
  })

  return (
    <div className="App">
      <div id="posts">
        {
          posts.map((post, index) => {
            return(
                <Post title={post.title} body={post.body} date={post.date} comments={post.comments} key={index}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
