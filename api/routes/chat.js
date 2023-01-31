import express from "express"
import { sendMessage, obtainMessage, obtainAdminMessage } from "../controllers/chat.js"

const router = express.Router()

router.post("/sendMessage", sendMessage)
router.post("/obtain", obtainMessage)
router.post("/obtainAdmin", obtainAdminMessage)

export default router