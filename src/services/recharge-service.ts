import { notFoundError, rechargeError } from "../errors/error";
import { Recharge, RechargeData } from "../protocols";
import { getPhoneById, getRechargeRepository, postRechargeRepository } from "../repositories/recharge-repository";

export async function postRechargeService(rechargeData: RechargeData): Promise<Recharge> {
    const phoneExist = await getPhoneById(rechargeData.phoneId);
    if (!phoneExist) {
        throw notFoundError("telefone");
    }

    if (rechargeData.amount < 10 || rechargeData.amount > 1000) {
        throw rechargeError ();
    }

    const recharge = await postRechargeRepository(rechargeData);

    return recharge;
}

export async function getRechargeService(number: string): Promise<string[]> {
    const recharges = await getRechargeRepository(number);
    if (!recharges) {
        throw notFoundError("recarga");
    }
    const phoneNumbers: string[] = recharges.map(recharge => recharge.phone);

    return phoneNumbers;
}