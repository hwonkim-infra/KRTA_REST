import express from 'express'
const router = express.Router()
import {
    getTCFs,
    getTCFById,
    deleteTCF,
    createTCF,
    updateTCF,    
} from '../controllers/TCFController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getTCFs).post(createTCF)

router
    .route('/:id')
    .get(getTCFById)
    .delete(deleteTCF)
    .put(updateTCF)

export default router;