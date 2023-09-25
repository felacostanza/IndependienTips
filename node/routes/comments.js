import express from "express"
import { getMyComments, getPostComments, postComment, editComment, deleteComment, getEditComment } from "../controllers/comments.js";

const router = express.Router();

router.get('/:id', getPostComments);
router.get('/mis-comments/:uid', getMyComments);
router.get('/edit/:id', getEditComment);
router.post('/:id', postComment);
router.put('/:id', editComment);
router.delete('/:id', deleteComment);

export default router