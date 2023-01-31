import express from "express"
import { submitForm } from "../controllers/contact.js"

const router = express.Router()

router.post("/submitForm", submitForm)

export default router