import { Router, Request, Response } from "express";
import { Data } from "../../common";
import Speechify from '../speechify'
const speechify = new Speechify()

const router = Router();

// @route POST /addToQueue
// @desc  Add speech data to queue
router.post("/", (req: Request, res: Response) => {
  const body: Data = req.body
  const result = speechify.addToQueue(body);
  res.status(200).json({ success: result });
});

export default router;
