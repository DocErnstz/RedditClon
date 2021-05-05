import React from "react";
import Post from "./Post/Post"
import { useSelector } from "react-redux";
import { useParams, Link as RouterLink } from 'react-router-dom';
import useStyles from "./styles";
import { CircularProgress, Grid } from "@material-ui/core";
const Posts = ({ setCurrentId }) => {
    // get state current posts
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    const { id } = useParams();
    const sub_posts = posts.filter(post => post.subreddit === id);
    return (
        !posts.length ? <CircularProgress/> : (
            <div>
                {sub_posts.map((post) => (
                    <div class="row" style={{marginTop:"100px"}}>
                        <div className="col">
                        <Post post={post} setCurrentId={setCurrentId}></Post>
                        </div>
                        
                    </div>
                ))}
            </div>
           
        )
    );
}
export default Posts;