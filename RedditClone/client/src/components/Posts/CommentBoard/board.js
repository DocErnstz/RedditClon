import React, { Component, useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddComment } from "../../../actions/posts.js";
import board from "./board.css";
import Comments from "./comments/Comments.js";


const Board = ({ match }) => {
    // get state current posts
    const posts = useSelector((state) => state.posts);
    const post = posts.filter((post) => post._id === match.params.id);
    const name = JSON.parse(localStorage.getItem('profile')).result.name
    const [FormReply, setFormReply] = useState(false);
    const [ReplyID, setReplyID] = useState("0");
    const [postData, setPostData] = useState({ creator: `${name}`, message: '', CommentReply: "0" });
    const [CommentLists, setCommentLists] = useState([]);
    const dispatch = useDispatch();

    
    useEffect(() => {
        //console.log(post[0]);
        if(post[0]){
            setCommentLists(post[0].comments);
            console.log(CommentLists);
        }
       

    }, [])

   
    const Reply = (comment) => {
        setReplyID(comment._id);
        setFormReply(!FormReply);
    }

    
   
    return (
        <div>
            <div class="card">
             {post[0] ? post[0].message : "undefinied"}
            </div>
             
         <div>
         <div>

             {post[0] ?  <Comments CommentLists={CommentLists} postId={post[0]._id} /> : ""}
             
         </div>
       
         </div>
         
        </div> 
       
        

    );
}
export default Board;