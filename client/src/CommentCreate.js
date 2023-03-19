import React, { useState } from "react";
import axios from "axios";

export default function CommentCreate({ postId }) {
    const [content, setContent] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        }).finally(()=> {
            setContent('');
        });
    };
    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Comments</label>
                <input className="form-control" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <button className="btn btn-primary" style={{marginTop: "10px"}}>Submit</button>
        </form>
    </div>
};