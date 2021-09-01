import React, { useEffect, useState } from 'react'
import SingleComment from './SingleComment';
import { v4 as uuidv4 } from 'uuid';


function ReplyComment(props) {

    const [ChildCommentNumber, setChildCommentNumber] = useState(0)
    const [OpenReplyComments, setOpenReplyComments] = useState(false)
    useEffect(() => {

        let commentNumber = 0;
        props.CommentLists.map((comment) => {

            if (comment.responseTo === props.parentCommentId) {
                commentNumber++
            }
        })
        setChildCommentNumber(commentNumber);
    }, [props.CommentLists, props.parentCommentId])


    let renderReplyComment = (parentCommentId) =>
        props.CommentLists.map((comment, index) => (
            <React.Fragment key={uuidv4()}>
                {comment.responseTo === parentCommentId &&
                    <div style={{ width: '95%', marginLeft: '40px', marginTop: "40px" }}>
                        <SingleComment comment={comment} postId={props.postId} postCreator={props.postCreator} postContent={props.postContent} refreshFunction={props.refreshFunction} key={uuidv4()}/>
                        <ReplyComment CommentLists={props.CommentLists} parentCommentId={comment._id} postId={props.postId} postCreator={props.postCreator} postContent={props.postContent} key={uuidv4()}/>
                    </div>
                }
            </React.Fragment>
        ))

    const handleChange = () => {
        setOpenReplyComments(!OpenReplyComments)
    }


    return (
        <div class="w-100">

           

            {
                renderReplyComment(props.parentCommentId)
            }

        </div>
    )
}

export default ReplyComment