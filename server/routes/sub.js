import express from "express";
import { createSub, getSubs, deleteAllSubs } from "../controllers/subs.js"
const router = express.Router();

router.post("/", createSub);
router.get("/", getSubs);
router.get("/DeleteAllSubs", deleteAllSubs);
export default router;