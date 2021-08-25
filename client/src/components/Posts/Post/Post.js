import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles.css';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import { useHistory } from 'react-router-dom';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const comments = () => {
        history.push(`/board/${post._id}`)
    }
    const user = JSON.parse(localStorage.getItem('profile'));
    const Likes = () => {
        if (post.likes.length > 0) {
          return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
      };
    
    return (
      <div className="card">
           
          <div className="card-body">
              <h5 className="card-title">
                  {post.title}
              </h5>
              <p className="card-text">
                  {post.message}
              </p>
              <p className="card-text">
              {moment(post.createdAt).fromNow()}
              </p>
              <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><Likes/> </Button>
        <Button size="small" color="primary" onClick={() =>dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
        <Button size="small" color="primary" onClick={() => comments()}><DeleteIcon fontSize="small" /> Comment</Button>
          </div>
      </div>
    );
}
export default Post;