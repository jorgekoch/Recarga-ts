import { NextFunction, Request, Response } from "express";
import { CustomError } from "../protocols";

export default function errorHandler(error: CustomError | Error, req: Request, res: Response, next: NextFunction) {
    if ('type' in error) {
        if (error.type === 'sameNameError') {
            return res.status(409).json({ message: error.message });
        }

        if (error.type === 'phoneLimitError') {
            return res.status(409).json({ message: error.message });
        }

        if (error.type === 'notFoundError') {
            return res.status(404).json({ message: error.message });
        }

        if (error.type === 'rechargeError') {
            return res.status(422).json({ message: error.message });
        }
        
        return res.status(500).json({ message: error.message });
    }
}