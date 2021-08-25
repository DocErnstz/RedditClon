import React, { useState } from 'react'
import { Button, Input } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { AddComment, getComment } from "../../../../actions/posts.js";
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';
const { TextArea } = Input;

function Comments(props) {
    const user = JSON.parse(localStorage.getItem('profile')).result;
    const posts = useSelector((state) => state.posts);
    const [Comment, setComment] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const postData = {
            content: Comment,
            creator: user._id,
            postId: props.postId
        }
       
        const comment = dispatch(AddComment(props.postId, postData));
        comment.then((comments) => props.refreshFunction(comments[0]));
        
    }

    return (
        <div>
            <br />
            <h5> Replies</h5>
            <hr />
            {/* Comment Lists  */}
            {console.log(props.CommentLists)}

            
            {props.CommentLists && props.CommentLists.map((comment, index) => (
                (!comment.responseTo &&
                    <React.Fragment>
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                        <ReplyComment CommentLists={props.CommentLists} postId={props.postId} parentCommentId={comment._id} refreshFunction={props.refreshFunction}/>
                    </React.Fragment>
                )
            ))}



            {/* Root Comment Form */}
            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <TextArea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleChange}
                    value={Comment}
                    placeholder="write some comments"
                />
                <br />
                <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}><h5>Post</h5></Button>
            </form>

        </div>
    )
}

export default Comments