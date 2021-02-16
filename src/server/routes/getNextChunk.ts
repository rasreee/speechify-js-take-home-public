import { Router, Request, Response } from "express";

import Speechify from '../speechify'
const speechify = new Speechify()

const router = Router();

// @route POST /getNextChunk
// @desc  Paginate data
router.get("/api/getNextChunk", (req: Request, res: Response) => {
  const chunk = speechify.getNextChunk();
  res.send({ chunk });
});

export default router;
