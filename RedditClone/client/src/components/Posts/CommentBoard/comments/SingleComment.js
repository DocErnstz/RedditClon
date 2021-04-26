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
        
        
    }


    const actions = [
        <span onClick={openReply} key="comment-basic-reply-to">Reply to </span>
    ]


   

    return (
        <div>
            <Comment
                actions={actions}
                author={"Anon"}
               
                content={
                    <p>
                        {props.comment.content}
                    </p>
                }
            ></Comment>


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