import { Router, Request, Response } from 'express';
import { SpeechifyService } from '../services';

const router = Router();
const service = SpeechifyService.getInstance();

// @route POST /getNextChunk
// @desc  Paginate data
router.get('/', (req: Request, res: Response) => {
	const chunk = service.getNextChunk();
	res.send({ chunk });
});

export default router;
