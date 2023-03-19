import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";


export default function PostList () {
   const [posts, setPosts] = useState({});

   const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
   };

   useEffect(()=> {
    fetchPosts();
   }, [posts]);

   const renderedPosts = Object.values(posts).map(post => {
    return <div className="card" style={{width: "30%", margin: "20px", padding: "10px"}} key={post.id}>
        <h3>{post.title}</h3>
        <CommentList postId={post.id} />
        <CommentCreate postId={post.id} />
    </div>
   });

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>
};