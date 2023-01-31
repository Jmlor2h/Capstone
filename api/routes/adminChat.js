import express from "express"
import { obtainChats } from "../controllers/adminChat.js";

const router = express.Router();

router.post("/obtainChats", obtainChats);

export default router;