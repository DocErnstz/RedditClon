import React from "react";
import { Button } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

import DeleteIcon from '@material-ui/icons/Delete';
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
      <div class="slicePost bg-white  mb-4 rounded shadow">
              
                 <div class="row p-3 h-100">
                 <div class="col-1" id="votes">
                     <i class="fas fa-chevron-up"></i>
                   <div class="text-center">99</div>
                    <i class="fas fa-chevron-down"></i>
                 </div>
                 <div class="col-11">
                   <div class="d-flex flex-column h-100" id="ContentPost">
                     <div class="d-flex align-items-center">
                         <div class="sub me-1"></div>
                        <div class="sub_title"> 
                          r/Planets  {moment(post.createdAt).fromNow()}</div>
                       </div>
                     <div class="h5 fw-bolder">{post.title}</div>
                     <div>{post.message}
                      </div>
                     <div class="flex-grow-1 d-flex align-items-center">
                       <i class="far fa-comment fa-2x"></i>
                       <div class="fw-bolder ms-1">99 Comments</div>
                     </div>
                   </div>
                 </div>
               </div>
               
               
             </div>
    );
}
export default Post;