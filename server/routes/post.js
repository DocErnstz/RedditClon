import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost, dislikePost, dislikeComment, AddComment, ClearComment, likeComment, getComment, deleteAllPosts} from "../controllers/posts.js"
const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/", getPosts);
router.post('/', auth, createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.get("/deletePosts", deleteAllPosts);
router.patch('/:id/likePost', likePost);
router.patch('/:id/dislikePost', auth, dislikePost);
router.put("/:id/AddComment", AddComment);
router.patch("/:id/:commentId/likeComment", auth, likeComment);
router.patch("/:id/:commentId/dislikeComment", auth, dislikeComment);
router.delete("/:id/ClearComment", ClearComment);
router.get("/:id/getComment", getComment);
export default router;