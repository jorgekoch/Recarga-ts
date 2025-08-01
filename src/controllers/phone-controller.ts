import { Request, Response } from "express";
import { createPhone } from "../services/phone-service";


export async function postContact(req: Request, res: Response) {
    await createPhone(req);
    return res.sendStatus(201);
}