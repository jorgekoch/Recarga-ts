import { Request, Response } from "express";
import { postRechargeService } from "services/recharge-service";

export async function postRecharge(req: Request, res: Response) {
    const recharge = await postRechargeService(req.body);
    return res.status(201).send(recharge);
}  
