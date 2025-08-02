import db from '../database';
import { ContactData } from 'protocols';

export async function postContact(contactData: ContactData) {
    const query = `
        INSERT INTO telefones (name, cpf, phone, carrier, description)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;

    const values = [
        contactData.name,
        contactData.cpf,
        contactData.phone,
        contactData.carrier,
        contactData.description
    ];

    const result = await db.query(query, values);
    return result.rows[0];
}

export async function getPhoneByNumber(number: string) {
    const query = 'SELECT * FROM telefones WHERE phone = $1';
    const values = [number];    
    const result = await db.query(query, values);
    if (result.rows.length > 0) {
        return result.rows[0]; 
    }

    return null; 
}

export async function countPhonesByCpf(cpf: string) {
    const query = 'SELECT COUNT(*) FROM telefones WHERE cpf = $1';
    const values = [cpf];
    return db.query(query, values);
}