import db from '../database';
import { RechargeData } from 'protocols';

export async function postRechargeRepository(rechargeData: RechargeData) {
    const query = `
        INSERT INTO recargas (phone_id, amount)
        VALUES ($1, $2)
        RETURNING *;
    `;

    const values = [rechargeData.phoneId, rechargeData.amount];
    const result = await db.query(query, values);
    
    return result.rows[0];
}

export async function getPhoneById(phoneId: string) {
    const query = `
        SELECT * FROM phones WHERE id = $1;
    `;
    
    const result = await db.query(query, [phoneId]);
    return result.rows[0];
}

export async function getRechargeRepository(number: string) {
    const query = `
        SELECT * FROM recargas
        WHERE phone_id = (SELECT id FROM telefones WHERE phone = $1);
    `;

    const result = await db.query(query, [number]);
    return result.rows;
}