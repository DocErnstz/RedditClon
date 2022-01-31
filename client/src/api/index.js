import axios from "axios";


const API = axios.create({ baseURL: "http://localhost:5000/" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/posts");
export const getComment = (id) => API.get(`/posts/${id}/getComment`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const dislikePost = (id) => API.patch(`/posts/${id}/dislikePost`);
export const likeComment = (id, commentId) => API.patch(`/posts/${id}/${commentId}/likeComment`);
export const dislikeComment = (id, commentId) => API.patch(`/posts/${id}/${commentId}/dislikeComment`);
export const AddComment = (id, comment) =>
  API.put(`/posts/${id}/AddComment`, comment);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);

export const fetchSubs = () => API.get("/sub");

