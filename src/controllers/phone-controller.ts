import { Request, Response } from "express";
import { createPhone } from "../services/phone-service";


export async function postContact(req: Request, res: Response) {
    try {
        await createPhone(req.body);
        return res.sendStatus(201);
    } catch (error: any) {
        return res.status(400).send({ error: error.message });
    }
}