import React from "react";
import Post from "./Post/Post"
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { CircularProgress, Grid } from "@material-ui/core";
const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    // get state current posts
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        !posts.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}></Post>
                    </Grid>
                ))}
            </Grid>
        )
    );
}
export default Posts;