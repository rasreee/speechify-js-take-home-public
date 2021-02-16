import { Router } from 'express'
import addToQueue from './addToQueue'
import getNextChunk from './getNextChunk'

const router = Router()

router.use('/api/addToQueue', addToQueue)
router.use('/api/getNextChunk', getNextChunk)

export default router
