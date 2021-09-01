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
            {post[0] ? (  <div className="bg-white me-3 p-2 d-flex flex-column flex-grow-1">
           <div className="d-flex">
             <div id="votes" className="d-flex flex-column pe-2">
                <i className="fas fa-chevron-up"></i>
               <div>99</div>
                <i className="fas fa-chevron-down"></i>
             </div>
             <div className="d-flex  flex-column flex-grow-1">
               <div className="d-flex flex-column">
                 <div>Posted by {" " + "u/" + post[0].creator}</div>
               <div className="h4">{post[0].title}</div>
               <div >{post[0].message}</div>
               <div className="d-flex align-items-center">
                 <i className="far fa-comment fa-2x me-2"></i>
                <div>99</div>
               </div>
               </div>

               
              </div>
              
           </div>
           
           {post[0] ?  <Comments CommentLists={CommentLists} postId={post[0]._id} postCreator={post[0].creator} refreshFunction={updateComment}/> : ""}
        </div>  ) : ""}
             
             <div id="infoReddit" style={{flexBasis: "300px", height: "350px"}}>
           <div className="card p-0 my-0 mx-auto "  style={{width: "18rem", height: "110%"}}>
  <div className="bg-primary w-100" style={{height: "40px"}}></div>
  <div className="card-body">
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem debitis mollitia quidem vitae expedita consequuntur sequi minus hic deserunt dicta eius rem, incidunt recusandae odio, molestiae asperiores accusamus, aspernatur.</p>
    <div className="d-flex">
      <div className="d-flex flex-column flex-grow-1">
        <h5>70k</h5>
        <p>Members</p>
      </div>
      <div className="d-flex flex-column flex-grow-1">
        <h5>10</h5>
        <p>Online</p>
      </div>
      
    </div>
     <div className="d-flex align-items-center">
      <i className="fas fa-birthday-cake fa-2x me-2"></i>
      <div className="h-50">Created Jun 1, 2003</div>
    </div>
    </div>
   
  </div>
</div>
         </div>
        </div> 
    );
}
export default Board;