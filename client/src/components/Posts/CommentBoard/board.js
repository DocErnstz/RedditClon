import React, { useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import board from "./board.css";
import Comments from "./comments/Comments.js";


const Board = ({ match }) => {
    // get state current posts
    const posts = useSelector((state) => state.posts);
    const post = posts.filter((post) => post._id === match.params.id);
    const name = JSON.parse(localStorage.getItem('profile')).result.name;
    const [FormReply, setFormReply] = useState(false);
    const [ReplyID, setReplyID] = useState("0");
    const [postData, setPostData] = useState({ creator: `${name}`, message: '', CommentReply: "0" });
    const [CommentLists, setCommentLists] = useState([]);
    const dispatch = useDispatch();

    
  
    useEffect(() => {
        if(post[0]){
            setCommentLists(post[0].comments);
        }
       

    })
    const updateComment = (newComment) => {
        setCommentLists(CommentLists.concat(newComment))
    }
   
    

   
    const Reply = (comment) => {
        setReplyID(comment._id);
        setFormReply(!FormReply);
    }

    
   
    return (
        <div>
            <div className="container">
            {post[0] ? (<div className="card">
                          <div className="card-body">
                          <h5 className="card-title">{post[0].title}</h5>
                          <p className="card-text">{post[0].message}</p>

                              </div>
                        </div>) : ""}

             {post[0] ?  <Comments CommentLists={CommentLists} postId={post[0]._id} refreshFunction={updateComment}/> : ""}
             
         </div>
       
         
         
        </div> 
       
        

    );
}
export default Board;