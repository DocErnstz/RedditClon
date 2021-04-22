import React, { Component }  from "react";
import { useSelector } from "react-redux";



const Board = ({ match }) => {
    // get state current posts
    const posts = useSelector((state) => state.posts);
    const post = posts.map((post) => (post._id === match.params.id ? post : post));
    const name = JSON.parse(localStorage.getItem('profile')).result.name
    const onSubmit = () => {
        console.log("a");
    }
    return (
        <form action={onSubmit()}>
            <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">{name}</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button class="btn btn-outline-secondary" type="submit">Submit</button>

</div>

        </form>
        

    );
}
export default Board;