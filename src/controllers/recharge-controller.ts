import { Request, Response } from "express";
import { getRechargeService, postRechargeService } from "../services/recharge-service";
import { GetRechargeResponse, PostRechargeResponse, RechargeData } from "protocols";

export async function postRecharge(req: Request, res: Response<PostRechargeResponse>) {
    const recharge = await postRechargeService(req.body as RechargeData);
    return res.status(201).send(recharge);
}  

export async function getRecharge(req: Request, res: Response<GetRechargeResponse>) {
    const { number } = req.params;
    const recharge = await getRechargeService(number);
    return res.status(200).send(recharge);
}