import express from "express";
import { createSub, getSubs } from "../controllers/subs.js"
const router = express.Router();

router.post("/", createSub);
router.get("/", getSubs);
export default router;