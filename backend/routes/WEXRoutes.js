import express from 'express'
const router = express.Router()
import {
    getWEXs,
    getWEXById,
    deleteWEX,
    createWEX,
    updateWEX,
    updateWEXdrawing,
    createWEXChange
} from '../controllers/WEXController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getWEXs).post(createWEX)

router
    .route('/:id')
    .get(getWEXById)
    .delete(deleteWEX)
    .put(updateWEX)

    router
    .route('/:id/addDrawings')
    .put(updateWEXdrawing)

    router
    .route('/addChange/')
    .post(createWEXChange)

export default router;

