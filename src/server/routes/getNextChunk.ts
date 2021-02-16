import { Router, Request, Response } from 'express'
import { SpeechifyService } from '../services'

const router = Router()
const service = new SpeechifyService()

// @route POST /getNextChunk
// @desc  Paginate data
router.get('/api/getNextChunk', (req: Request, res: Response) => {
    const chunk = service.getNextChunk()
    res.send({ chunk })
})

export default router
