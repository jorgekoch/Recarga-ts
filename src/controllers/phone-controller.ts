import { Request, Response } from "express";
import { postPhoneService } from "../services/phone-service";


export async function postContact(req: Request, res: Response) {
    await postPhoneService(req);
    return res.sendStatus(201);
}