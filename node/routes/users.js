import express from "express"
import { updateImg } from "../controllers/users.js";

const router = express.Router();

router.put('/img', updateImg)

export default router