import express from 'express'
const router = express.Router()
import {
    getHEXs,
    getHEXById,
    deleteHEX,
    createHEX,
    updateHEX,
    updateHEXdrawing,
    createHEXChange
} from '../controllers/HEXController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getHEXs).post(createHEX)

router
    .route('/:id')
    .get(getHEXById)
    .delete(deleteHEX)
    .put(updateHEX)

    router
    .route('/:id/addDrawings')
    .put(updateHEXdrawing)

    router
    .route('/addChange/')
    .post(createHEXChange)

export default router;