import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost, AddComment, ClearComment, getComment } from "../controllers/posts.js"
const router = express.Router();

router.get("/", getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
router.put("/:id/AddComment", AddComment);
router.delete("/:id/ClearComment", ClearComment);
router.get("/:id/getComment", getComment);
export default router;