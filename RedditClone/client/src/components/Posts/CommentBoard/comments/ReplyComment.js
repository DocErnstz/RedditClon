import React, { useEffect, useState } from 'react'
import SingleComment from './SingleComment';

function ReplyComment(props) {

    const [ChildCommentNumber, setChildCommentNumber] = useState(0)
    const [OpenReplyComments, setOpenReplyComments] = useState(false)
    useEffect(() => {

        let commentNumber = 0;
        props.comments.map((comment) => {

            if (comment.responseTo === props.parentCommentId) {
                commentNumber++
            }
        })
        setChildCommentNumber(commentNumber)
    }, [props.comments, props.parentCommentId])


    let renderReplyComment = (parentCommentId) =>
        props.comments.map((comment, index) => (
            <React.Fragment>
                {comment.responseTo === parentCommentId &&
                    <div style={{ width: '80%', marginLeft: '40px' }}>
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                        <ReplyComment comments={props.comments} parentCommentId={comment._id} postId={props.postId} refreshFunction={props.refreshFunction} />
                    </div>
                }
            </React.Fragment>
        ))

   


    return (
        <div>
            {
                renderReplyComment(props.parentCommentId)
            }

        </div>
    )
}

export default ReplyComment