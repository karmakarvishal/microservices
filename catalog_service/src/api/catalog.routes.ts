import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

//end points
router.post('/products', async (req: Request, res: Response, next: NextFunction) => {
    return res.status(201).json({});
})


export default router;