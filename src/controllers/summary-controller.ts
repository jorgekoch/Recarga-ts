import { Request, Response } from "express";
import { getSummaryService } from "../services/sumary-service";

export async function getSummary(req: Request, res: Response) {
    const { document } = req.params;

    const summary = await getSummaryService(document); // Placeholder for actual database call

    return res.status(200).json(summary);
}