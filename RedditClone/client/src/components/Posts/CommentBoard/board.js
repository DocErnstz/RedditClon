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
        if(post[0]){
            setCommentLists(post[0].comments);
        }
       

    }, [])

    
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(postData);
        if (post[0]) {  
            dispatch(AddComment(post[0]._id, postData));
            console.log(post.comments);
        }
      
        
       
    }
    const Reply = (comment) => {
        setReplyID(comment._id);
        setFormReply(!FormReply);
    }

    
   
    return (
        <div>
            <div class="card">
             {post[0] ? post[0].message : "undefinied"}
            </div>
             <form  onSubmit={onSubmit}>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">{name}</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setPostData({ ...postData, message: e.target.value })}></textarea>
                <button class="btn btn-outline-secondary" type="submit">Submit</button>

            </div>
        </form>
         <div>
         <div>

             {post[0] ?  <Comments CommentLists={CommentLists} postId={post[0]._id} /> : ""}
             
         </div>
       
         </div>
         
        </div> 
       
        

    );
}
export default Board;