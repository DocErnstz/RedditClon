import React, { Component, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddComment } from "../../../actions/posts.js";
import board from "./board.css";


const Board = ({ match }) => {
    // get state current posts
    const posts = useSelector((state) => state.posts);
    const post = posts.filter((post) => post._id === match.params.id);
    const name = JSON.parse(localStorage.getItem('profile')).result.name
    const [FormReply, setFormReply] = useState(false);
    const [ReplyID, setReplyID] = useState("0");
    const [postData, setPostData] = useState({ creator: `${name}`, message: '', order: 0, CommentReply: "0" });
    const dispatch = useDispatch();
    
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(postData);
        if (post[0]) {
            
            ///dispatch(AddComment(post[0]._id, postData));
          
            
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
         {post[0] ? (
            <div>
                {post[0].comments.map((comment) => (
                    <div className="container">
                        <div class="comment">
                        {comment.content}
                        <a class="btn" onClick={() => {Reply(comment)}}>Reply</a>
                        {(FormReply && ReplyID === comment._id) ? 
                        (<form onSubmit={onSubmit}>
                            <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">{name}</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setPostData({ ...postData, message: e.target.value, order: comment.order + 1, CommentReply: comment._id })}></textarea>
                            <button class="btn btn-outline-secondary" type="submit">Submit</button>
                            </div>
                            </form> ) : ""}
                        </div>
                        
                    

                    </div>
                   
                    
                ))}
            </div>
        ) : ""} 

         </div>


        </div>
       
        

    );
}
export default Board;