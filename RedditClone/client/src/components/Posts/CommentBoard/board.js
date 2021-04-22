import React, { Component }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddComment } from "../../../actions/posts.js";


const Board = ({ match }) => {
    // get state current posts
    const posts = useSelector((state) => state.posts);
    const post = posts.map((post) => (post._id === match.params.id ? post : post));
    const name = JSON.parse(localStorage.getItem('profile')).result.name
    const dispatch = useDispatch();
    const onSubmit = () => {
        dispatch(AddComment());
    }
   
    return (
        <div>
            <div class="card">
              {post[0].message}
            </div>
             <form action={onSubmit()}>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">{name}</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button class="btn btn-outline-secondary" type="submit">Submit</button>
            </div>
        </form>

        </div>
       
        

    );
}
export default Board;