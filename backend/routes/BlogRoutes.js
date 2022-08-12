import express from 'express'
const router = express.Router()
import {
    getBlogs,
    getBlogById,
    deleteBlog,
    createBlog,
    updateBlog,    
} from '../controllers/BlogController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getBlogs).post(createBlog)

router
    .route('/:id')
    .get(getBlogById)
    .delete(deleteBlog)
    .put(updateBlog)

export default router;