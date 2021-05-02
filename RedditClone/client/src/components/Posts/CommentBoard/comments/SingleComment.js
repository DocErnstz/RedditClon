import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { AddComment } from "../../../../actions/posts.js";
import { Comment, Avatar, Button, Input } from 'antd';
const { TextArea } = Input;
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
    console.log(props.comment);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("a");
        const postData = {
            content: CommentValue,
            creator: user._id,
            postId: props.postId,
            responseTo: props.comment._id,
        }
       
        dispatch(AddComment(props.postId, postData));
        
        const comment = dispatch(AddComment(props.postId, postData));
        comment.then((comments) => props.refreshFunction(comments[0]));
        
    }


    const actions = [
        <span class="badge badge-pill badge-danger"onClick={openReply} key="comment-basic-reply-to">Reply to </span>
    ]


   

    return (
        <div>
           <div class="card">
  <div class="card-body">
    <h5 class="card-title">{user.name}</h5>
    <p class="card-text">{props.comment.content}</p>
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
                    <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
                </form>
            }

        </div>
    )
}

export default SingleComment