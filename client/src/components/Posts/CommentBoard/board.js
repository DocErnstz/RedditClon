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
        <div id="Commentbar" style={{margin: "20px 100px", width: "calc(100% - 160px)"}}>
            <div className="d-flex">
            {post[0] ? (  <div class="bg-white me-3 p-2 d-flex flex-column flex-grow-1">
           <div class="d-flex">
             <div id="votes" class="d-flex flex-column pe-2">
                <i class="fas fa-chevron-up"></i>
               <div>99</div>
                <i class="fas fa-chevron-down"></i>
             </div>
             <div class="d-flex  flex-column flex-grow-1">
               <div className="d-flex flex-column">
                 <div>Posted by {" " + "u/" + post[0].creator}</div>
               <div class="h4">{post[0].title}</div>
               <div >{post[0].message}</div>
               <div class="d-flex align-items-center">
                 <i class="far fa-comment fa-2x me-2"></i>
                <div>99</div>
               </div>
               </div>

               
              </div>
              
           </div>
           <form class="d-inline-flex flex-column align-items-end mx-auto my-3" style={{width: "90%"}}><textarea name="" id="" class="w-100 mb-3" style={{height: "150px"}}>Hello World </textarea>
           <button className="btn bg-black border-0 text-white m-0" style={{width: "100px"}}>Comment</button>
           </form>
           {post[0] ?  <Comments CommentLists={CommentLists} postId={post[0]._id} refreshFunction={updateComment}/> : ""}
        </div>  ) : ""}
             
             <div id="infoReddit" style={{flexBasis: "600px", height: "350px"}}>
           <div class="card p-0 my-0 mx-auto "  style={{width: "18rem", height: "110%"}}>
  <div class="bg-primary w-100" style={{height: "40px"}}></div>
  <div class="card-body">
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem debitis mollitia quidem vitae expedita consequuntur sequi minus hic deserunt dicta eius rem, incidunt recusandae odio, molestiae asperiores accusamus, aspernatur.</p>
    <div class="d-flex">
      <div class="d-flex flex-column flex-grow-1">
        <h5>70k</h5>
        <p>Members</p>
      </div>
      <div class="d-flex flex-column flex-grow-1">
        <h5>10</h5>
        <p>Online</p>
      </div>
      
    </div>
     <div class="d-flex align-items-center">
      <i class="fas fa-birthday-cake fa-2x me-2"></i>
      <div class="h-50">Created Jun 1, 2003</div>
    </div>
    </div>
   
  </div>
</div>
         </div>
        </div> 
    );
}
export default Board;