import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/posts';
import styles from './styles.css';
import { amber } from '@material-ui/core/colors';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '',  selectedFile: '' });
  };
  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf('/') + 1);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(postData);
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name, subreddit: id}));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name, subreddit: id}));
      clear();
    }
  };
  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value })
  };
  if (!user?.result?.name) {
    return (
      <div class="ad">
       <h1>Create a user to post</h1>
      </div>
    );
  }

  return (
    <div>
      <div class="post">
        <button class="button"  data-bs-toggle="modal" data-bs-target="#exampleModal"><h5>Post</h5></button>
   </div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Post Data</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {user.result.name ? (<form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Title</label>
          <input type="text" class="form-control" name="title" id="exampleFormControlInput1" placeholder="..." onChange={handleChange}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Description</label>
          <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3" onChange={handleChange}></textarea>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Image</label>
          <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        </div>
        <button class="button" type="submit"><h5>Send</h5></button>
        </form>) : "log to post"}      
        <div>
        </div> 
     
      </div>
      
    </div>
  </div>
</div>

    </div>
    

  );
};

export default Form;