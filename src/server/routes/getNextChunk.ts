import { Router, Request, Response } from "express";
import { createRedisClient } from "../clients";
import { SpeechifyService } from '../services'

const router = Router();
const service = new SpeechifyService(createRedisClient())

// @route POST /getNextChunk
// @desc  Paginate data
router.get("/api/getNextChunk", (req: Request, res: Response) => {
  const chunk = service.getNextChunk();
  res.send({ chunk });
});

export default router;
