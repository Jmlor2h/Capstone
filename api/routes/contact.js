import express from "express"
import { submitForm, grabData } from "../controllers/contact.js"

const router = express.Router()

router.post("/submitForm", submitForm);
router.post("/grabData", grabData);
export default router