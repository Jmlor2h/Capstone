import express from "express"
import { submitMentAllyForm } from "../controllers/mentAllyForm.js"

const router = express.Router()

router.post("/survey", submitMentAllyForm)

export default router