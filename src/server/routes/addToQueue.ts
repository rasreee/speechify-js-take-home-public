import { Router, Request, Response } from "express";
import { Data } from "../../common";
import { createRedisClient } from "../clients";
import { SpeechifyService } from '../services'

const router = Router();
const service = new SpeechifyService(createRedisClient())

// @route POST /api/addToQueue
// @desc  Add speech data to queue
router.post("/", async (req: Request, res: Response) => {

  const result = await service.addToQueue(req.body);
  res.status(200).json({ success: result });
});

export default router;
