import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost, AddComment, ClearComment, getComment, deleteAllPosts} from "../controllers/posts.js"
const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/", getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.get("/deletePosts", deleteAllPosts);
router.patch('/:id/likePost', auth, likePost);
router.put("/:id/AddComment", AddComment);
router.delete("/:id/ClearComment", ClearComment);
router.get("/:id/getComment", getComment);
export default router;