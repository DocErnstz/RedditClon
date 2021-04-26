import React, { useState } from 'react'
import { Comment, Avatar, Button, Input } from 'antd';
const { TextArea } = Input;
function SingleComment(props) {
    const user = JSON.parse(localStorage.getItem('profile')).result.name
    const [CommentValue, setCommentValue] = useState("")
    const [OpenReply, setOpenReply] = useState(false)

    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }

    const openReply = () => {
        setOpenReply(!OpenReply)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log("e");
    }

   

    return (
        <div>
            <Comment
                
                author={props.comment.writer.name}
                avatar={
                    <Avatar
                        src={props.comment.writer.image}
                        alt="image"
                    />
                }
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