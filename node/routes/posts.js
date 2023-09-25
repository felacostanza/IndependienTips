import express from "express"
import { deleteBlog, getAllBlogs, getSingleBlog, postBlog, updateBlog, getMyBlogs } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getAllBlogs)
router.get('/mis-posts/:uid', getMyBlogs);
router.get('/:id', getSingleBlog)
router.post('/', postBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)

export default router