import React, { useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import board from "./board.css";
import Comments from "./comments/Comments.js";


const Board = ({ match }) => {
    // get state current posts
    const posts = useSelector((state) => state.posts);
    const post = posts.filter((post) => post._id === match.params.id);
    //const name = JSON.parse(localStorage.getItem('profile')).result.name;
    const [FormReply, setFormReply] = useState(false);
    const [ReplyID, setReplyID] = useState("0");
    
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
            {post[0] ? (  <div class="bg-white me-3 p-2 d-flex flex-column flex-grow-1">
           <div class="d-flex">
             <div id="votes" class="d-flex flex-column pe-2">
                <i class="fas fa-chevron-up"></i>
               <div>99</div>
                <i class="fas fa-chevron-down"></i>
             </div>
             <div class="d-flex  flex-column">
               <div>Posted by u/Mercadoernesto</div>
               <div class="h4">Space Science Rocks</div>
               <div >Lorem ipsum dolor sit amet consectetur adipisicing elit Rem a quidem quasi reprehenderit.</div>
               <div class="d-flex align-items-center">
                 <i class="far fa-comment fa-2x me-2"></i>
                <div>99</div>
               </div>
              </div>
              
           </div>
        </div>  ) : ""}
             {post[0] ?  <Comments CommentLists={CommentLists} postId={post[0]._id} refreshFunction={updateComment}/> : ""}
         </div>
        </div> 
    );
}
export default Board;