import React, {useEffect} from "react";
import { getSubs } from "../../../actions/subs";
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, likePost, dislikePost } from '../../../actions/posts';
import { useHistory } from 'react-router-dom';

const Post = ({ post }) => {
    const dispatch = useDispatch();
    const history = useHistory();
   
    const user = JSON.parse(localStorage.getItem('profile'));
    const subs = useSelector(state => state.subs);
    const subPost = subs.filter((sub) => sub.title === post.subRedditName);
    const subPostId = (subPost.length ? subPost[0]._id : "");
     const redirect = (e) => {
       if(e.target.name == "comment"){
         history.push(`/board/${post._id}`);
       } else if (e.target.name == "sub"){
           history.push(`/r/${post.subRedditName }/${subPostId}`);
       } 
    }
 
   
    const upvotes = post.likes.filter((like) => !like.includes("-"));
    const downvotes = post.likes.filter((like) => like.includes("-"));
    const Tvotes = upvotes.length - downvotes.length;
    
    return (
      <div className="slicePost bg-white  mb-4 rounded shadow">
              
                 <div className="row p-3 h-100">
                 <div className="col-1" id="votes">
                   <button className="border-0 bg-white p-0" style={{cursor: "pointer"}} data-testid="upvote" onClick={() => dispatch(likePost(post._id))}>
                      <i className="fas fa-chevron-up"></i>
                   </button>
                    
                   <div className="text-center" data-testid="Tvotes">{Tvotes}</div>
                   <button className="border-0 bg-white p-0" style={{cursor: "pointer"}} data-testid="downvote" onClick={() => dispatch(dislikePost(post._id))}>
                      <i className="fas fa-chevron-down" ></i>
                   </button>
                   
                 </div>
                 <div className="col-11">
                   <div className="d-flex flex-column h-100" id="ContentPost">
                     <div className="d-flex align-items-center">
                         <div className="sub me-1"></div>
                        <div className="sub_title"> 
                         <a style={{textDecoration: "none"}}  name="sub" onClick={redirect} className="text-dark" >{"r/" + post.subRedditName}</a>
                         { " " + moment(post.createdAt).fromNow() + " " + "by" + " " + post.creator}</div>
                       </div>
                     <div className="h5 fw-bolder">{post.title}</div>
                     <div>{post.message}
                      </div>
                     <div className="flex-grow-1 d-flex align-items-center">
                       <i className="far fa-comment fa-2x"></i>
                       <div className="fw-bolder ms-1">
                         {post.comments.length} <a  style={{textDecoration: "none"}} name="comment"  onClick={redirect} className="text-dark">{"Comments"}</a></div>
                     </div>
                   </div>
                 </div>
               </div>
               
               
             </div>
    );
}
export default Post;