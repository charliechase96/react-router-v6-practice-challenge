import { useState, useEffect } from "react";
import Post from "./Post";

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/posts")
        .then(response => response.json())
        .then(data => setPosts(data))
    }, []);

    return (
        <div>
            <ul>
               <li>{posts.map(post => <Post key={post.id} />)}</li> 
            </ul>
        </div>
    )
}

export default Blog;