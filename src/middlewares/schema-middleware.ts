import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validatePhoneSchema(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
        return res.status(400).send(validation.error.details[0].message);
    }
    next();
}};