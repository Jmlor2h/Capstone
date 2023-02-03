import express from "express"
import { obtainChats, sendAdminMessage } from "../controllers/adminChat.js";

const router = express.Router();

router.post("/obtainChats", obtainChats);
router.post("/sendMessage", sendAdminMessage )
export default router;