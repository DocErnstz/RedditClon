import React, { useState } from 'react'
import { Button, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { AddComment, getComment } from "../../../../actions/posts.js";
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';
const { TextArea } = Input;

function Comments(props) {
    //const user = JSON.parse(localStorage.getItem('profile')).result;
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
            creator: "mercadoernesto",
            postId: props.postId
        }
       
        const comment = dispatch(AddComment(props.postId, postData));
        comment.then((comments) => props.refreshFunction(comments[0]));
        
    }

    return (
        <div>
            
            {props.CommentLists && props.CommentLists.map((comment, index) => (
                (!comment.responseTo &&
                    <React.Fragment key={uuidv4()}>
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} key={uuidv4()} />
                        <ReplyComment CommentLists={props.CommentLists} postId={props.postId} parentCommentId={comment._id} refreshFunction={props.refreshFunction} key={uuidv4()} />
                    </React.Fragment>
                )
            ))}
        </div>
    )
}

export default Comments