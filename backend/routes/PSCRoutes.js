import express from 'express'
const router = express.Router()
import {
    getPSCs,
    getPSCById,
    deletePSC,
    createPSC,
    updatePSC,    
} from '../controllers/PSCTCFController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getPSCs).post(createPSC)

router
    .route('/:id')
    .get(getPSCById)
    .delete(deletePSC)
    .put(updatePSC)

export default router;