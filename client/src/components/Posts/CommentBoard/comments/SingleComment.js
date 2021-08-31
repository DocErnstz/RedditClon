import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { AddComment } from "../../../../actions/posts.js";
import { Button, Input } from 'antd';
const { TextArea } = Input;
function SingleComment(props) {
    //const user = JSON.parse(localStorage.getItem('profile')).result;
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
            creator: "mercadoernesto",
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
        <div>
           <div className="card">
  <div className="card-body">
    <h5 className="card-title">mercadoernesto</h5>
    <p className="card-text">{props.comment.content}</p>
    {actions}
  </div>
</div>
            

            {OpenReply &&
                <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                    <TextArea
                        style={{ width: '100%', borderRadius: '5px' }}
                        onChange={handleChange}
                        value={CommentValue}
                        placeholder="write some comments"
                    />
                    <br />
                    <Button style={{ width: '20%', height: '8px'}} onClick={onSubmit}><h5>Post</h5></Button>
                </form>
            }

        </div>
    )
}

export default SingleComment