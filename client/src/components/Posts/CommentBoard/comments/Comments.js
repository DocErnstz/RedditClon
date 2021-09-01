import React, { useState } from 'react'
import { Button, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { AddComment, getComment } from "../../../../actions/posts.js";
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';


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
            creator: props.postCreator,
            postId: props.postId
        }
        console.log(postData);
       
        const comment = dispatch(AddComment(props.postId, postData));
        comment.then((comments) => props.refreshFunction(comments[0]));
        
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <form className="d-inline-flex flex-column align-items-end my-3" style={{width: "95%"}} onSubmit={onSubmit}>
                <textarea name="" id="" className="w-100 mb-3"  onChange={handleChange} style={{height: "150px"}} placeholder="Hello World"></textarea>
                <input type="submit" value="Comment" className="btn bg-black border-0 text-white" style={{width: "100px", marginRight: "1px", marginTop: "-50px", zIndex: "99"}}/>
           
           </form>
            {props.CommentLists && props.CommentLists.map((comment, index) => (
                (!comment.responseTo &&
                    <React.Fragment key={uuidv4()}>
                        <SingleComment comment={comment} postId={props.postId} postCreator={props.postCreator} postContent={props.postContent} refreshFunction={props.refreshFunction} key={uuidv4()} />
                        <ReplyComment CommentLists={props.CommentLists} postId={props.postId} postContent={props.postContent} postCreator={props.postCreator} parentCommentId={comment._id} refreshFunction={props.refreshFunction} key={uuidv4()} />
                    </React.Fragment>
                )
            ))}
        </div>
    )
}

export default Comments