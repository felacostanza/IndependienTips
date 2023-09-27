import express from "express"
import { updateData, updateImg } from "../controllers/users.js";

const router = express.Router();

router.put('/img', updateImg);
router.put('/data', updateData);

export default router