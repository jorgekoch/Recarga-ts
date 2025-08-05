import { Request, Response } from "express";
import { getRechargeService, postRechargeService } from "../services/recharge-service";

export async function postRecharge(req: Request, res: Response) {
    const recharge = await postRechargeService(req.body);
    return res.status(201).send(recharge);
}  

export async function getRecharge(req: Request, res: Response) {
    const { number } = req.params;
    const recharge = await getRechargeService(number);
    return res.status(200).send(recharge);
}