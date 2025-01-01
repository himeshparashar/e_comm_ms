import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

//endpoints

router.post(
  "/product",
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("Product created");
  }
);

export default router;
