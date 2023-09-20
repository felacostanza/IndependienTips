import express from "express"
import { deleteBlog, getAllBlogs, getSingleBlog, postBlog, updateBlog } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getAllBlogs)
router.get('/:id', getSingleBlog)
router.post('/', postBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)

export default router