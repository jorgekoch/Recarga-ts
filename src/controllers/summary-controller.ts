import { Request, Response } from "express";
import { getSummaryService } from "../services/sumary-service";
import { notFoundError } from "../errors/error";

export async function getSummary(req: Request, res: Response) {
    const { document } = req.params;

    const summary = await getSummaryService(document); 
    if (!summary) {
        throw notFoundError("Resumo");
    }

    return res.status(200).json(summary);
}