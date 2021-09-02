import * as api from "../api";

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        data.map((post) => (dispatch({ type: "DELETE", payload: post._id})))
        data.map((post) => (dispatch({ type: "CREATE", payload: post})))
        //dispatch({ type: "FETCH_ALL", payload: data});
    } catch(error){
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: "CREATE", payload: data})
    } catch(error){
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
      // data = updatePost json
      const { data } = await api.updatePost(id, post);
      dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const deletePost = (id) => async (dispatch) => {
    try {
      //delete post from PostMessage
      await api.deletePost(id);
      //delete post from store
      dispatch({ type: "DELETE", payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const likePost = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    try {
      const { data } = await api.likePost(id, user?.token);
     
      dispatch({ type: "LIKE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const dislikePost = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    try {
      const { data } = await api.dislikePost(id, user?.token);
      console.log(data);
      dispatch({ type: "LIKE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const likeComment = (id, commentId) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    try {
      const { data } = await api.likeComment(id, commentId, user?.token);
       console.log(data);
      dispatch({ type: "LIKE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const dislikeComment = (id, commentId) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    try {
      const { data } = await api.dislikeComment(id, commentId, user?.token);
      console.log(data);
      dispatch({ type: "LIKE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };


  export const AddComment = (id, comment) => async (dispatch) => {
    try {
      const { data } = await api.AddComment(id, comment);

      await dispatch({ type: "UPDATE", payload: data });
      return data.comments;
    } catch (error) {
      console.log(error.message);
    }
  };
  export const getComment = (id) => async () => {
    try {
      const { data } = await api.getComment(id);
      console.log(data);
      
    } catch (error) {
      console.log(error.message);
    }
  };