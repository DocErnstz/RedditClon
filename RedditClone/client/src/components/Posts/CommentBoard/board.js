import React, { Component }  from "react";
import Post from "../Post/Post"
import { useSelector } from "react-redux";



const Board = ({ match }) => {
    // get state current posts
    const posts = useSelector((state) => state.posts);
    const post = posts.map((post) => (post._id === match.params.id ? post : post));
    console.log(post[0]);
    return (
        <div>
        {post[0].message}
    </div>
    );
}
export default Board;