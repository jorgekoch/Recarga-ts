import db from '../database';
import { GetPhoneById, Recharge, RechargeData } from 'protocols';

export async function postRechargeRepository(rechargeData: RechargeData): Promise<Recharge> {
    const result = await db.query<Recharge>(`
        INSERT INTO recargas (phone_id, amount)
        VALUES ($1, $2)
        RETURNING *;
    `, [rechargeData.phoneId, rechargeData.amount]);
    
    return result.rows[0];
}

export async function getPhoneById(phoneId: string): Promise<GetPhoneById | null> {
    const result = await db.query<GetPhoneById>(`
        SELECT * FROM telefones WHERE id = $1;
    `, [phoneId]);
    return result.rows[0];
}

export async function getRechargeRepository(number: string): Promise<GetPhoneById[]> {
    const result = await db.query<GetPhoneById>(`
        SELECT * FROM recargas
        WHERE phone_id = (SELECT id FROM telefones WHERE phone = $1);
    `, [number]);
    return result.rows;
}