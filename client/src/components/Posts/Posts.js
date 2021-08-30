import React from "react";
import Post from "./Post/Post"
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import useStyles from "./styles";
import { CircularProgress } from "@material-ui/core";
const Posts = ({ setCurrentId }) => {
    // get state current posts
    const posts = useSelector((state) => state.posts);
    const { id } = useParams();
    const sub_posts = posts.filter(post => post.subreddit === id);
    return (
        !posts.length ? <CircularProgress/> : (
            <div>
                <div className="row">
                {sub_posts.map((post) => (
                        <div className="col-12">
                        <Post post={post} setCurrentId={setCurrentId}></Post>
                        </div>
                ))}
                </div>
            </div>
           
        )
    );
}
export default Posts;