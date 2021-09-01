import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { AddComment } from "../../../../actions/posts.js";

function SingleComment(props) {
    const user = JSON.parse(localStorage.getItem('profile')).result;
    const [CommentValue, setCommentValue] = useState("")
    const [OpenReply, setOpenReply] = useState(false)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }

    const openReply = () => {
        setOpenReply(!OpenReply)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        const postData = {
            content: CommentValue,
            creator: user.name,
            postId: props.postId,
            responseTo: props.comment._id,
        }
       
        dispatch(AddComment(props.postId, postData));
        
        const comment = dispatch(AddComment(props.postId, postData));
        comment.then((comments) => props.refreshFunction(comments[0]));
        
    }


    const actions = [
        <span className="badge badge-pill badge-danger"onClick={openReply} key="comment-basic-reply-to">Reply to </span>
    ]

  
    return (
        <div class="w-100 d-flex flex-column align-items-end">
           <div className="d-flex w-100 align-items-start mt-1" id="comment">
             <div className="p-2">
             <i className="fa fa-user" aria-hidden="true"></i>
             </div>
             <div className="flex-grow-1 d-flex flex-column">
               <div>{props.comment.creator}</div>
               <div>{props.comment.content}</div>
              <div className="d-flex align-items-center justify-content-between" style={{width: "200px"}}>
                 <i className="fas fa-chevron-up fa-2x"></i>
                 <div>99</div>
                 <i className="fas fa-chevron-down fa-2x"></i>
                  <i className="far fa-comment fa-2x"></i>
                  <div onClick={openReply}>Reply</div>
               </div>          
              </div>
             
           </div>

            {OpenReply &&
                
                <form className="d-inline-flex flex-column align-items-end my-3" style={{width: "95%"}} onSubmit={onSubmit}>
                <textarea name="" id="" className="w-100 mb-3"  onChange={handleChange} style={{height: "150px"}} placeholder="Hello World"></textarea>
                <input type="submit" value="Comment" className="btn bg-black border-0 text-white" style={{width: "100px", marginRight: "1px", marginTop: "-50px", zIndex: "99"}}/>
           
           </form>
            }

        </div>
    )
}

export default SingleComment