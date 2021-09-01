import React from "react";
import Post from "./Post/Post"
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';
const Posts = ({ setCurrentId, isMain }) => {
    // get state current posts
    const posts = useSelector((state) => state.posts);
  
    const { id } = useParams();
    const sub_posts = posts.filter(post => post.subreddit === id);
    const RealPosts = (isMain ? posts : sub_posts);
   
    return (
        !posts.length ? <CircularProgress /> : (
            <div >
                <div className="row">
                {RealPosts.map((post) => (
                        <div className="col-12" key={uuidv4()}>
                        <Post post={post} setCurrentId={setCurrentId}></Post>
                        </div>
                ))}
                </div>
            </div>
           
        )
    );
}
export default Posts;