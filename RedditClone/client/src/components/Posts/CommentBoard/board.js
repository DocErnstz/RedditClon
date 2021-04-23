import React, { Component, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddComment } from "../../../actions/posts.js";


const Board = ({ match }) => {
    // get state current posts
    const posts = useSelector((state) => state.posts);
    const post = posts.filter((post) => post._id === match.params.id);
    const name = JSON.parse(localStorage.getItem('profile')).result.name
    const [postData, setPostData] = useState({ creator: `${name}`, message: ''});
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault()
        console.log("e");
        if (post[0]) {
            
            dispatch(AddComment(post[0]._id, postData));
            console.log(post[0].comments)
            
        }
      
        
       
    }
    const Comment = () => {
        
            return (
                post[0].comments.map((comment) => (
                    <div>{comment.content}</div>
                ))
            )
        
       
           
    }
   
   
    return (
        <div>
            <div class="card">
             {post[0] ? post[0].message : "undefinied"}
            </div>
             <form autoComplete="off" noValidate onSubmit={onSubmit}>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">{name}</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setPostData({ ...postData, message: e.target.value })}></textarea>
                <button class="btn btn-outline-secondary" type="submit">Submit</button>
            </div>
        </form>
         <div>
          { post[0] ? <Comment/> : "lol" }   
         </div>

        </div>
       
        

    );
}
export default Board;