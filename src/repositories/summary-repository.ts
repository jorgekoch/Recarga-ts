import { SummaryRepository } from 'protocols';
import db from '../database';

export async function getSummaryRepository(document: string): Promise<SummaryRepository[]> {
    const result = await db.query<SummaryRepository>(`
        SELECT
            t.name,
            t.cpf,
            t.phone,
            t.carrier,
            t.description,
            r.amount
        FROM
            telefones AS t
        LEFT JOIN
            recargas AS r ON t.id = r.phone_id
        WHERE
            t.cpf = $1;
            `, [document]);
    return result.rows;
}