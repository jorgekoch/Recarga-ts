import db from '../database';
import { ContactData, CountPhonesByCpf, GetPhone, GetPhoneByDocument, PhoneData } from 'protocols';

export async function postPhoneRepository(contactData: ContactData) {
    const result = await db.query<PhoneData>(`
        INSERT INTO telefones (name, cpf, phone, carrier, description)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    ` [
        contactData.name,
        contactData.cpf,
        contactData.phone,
        contactData.carrier,
        contactData.description
    ]);


    const ContactData = result.rows[0];
    return ContactData;
}

export async function getPhoneByNumber(number: string) {
    const result = await db.query<GetPhone>('SELECT * FROM telefones WHERE phone = $1', [number]);
    if (result.rows.length > 0) {
        return result.rows[0]; 
    }

    return null; 
}

export async function CountPhonesByCpf(cpf: string) {
    const result = db.query<CountPhonesByCpf>('SELECT COUNT(*) FROM telefones WHERE cpf = $1', [cpf])
    return result;
}

export async function getPhoneByDocument(document: string) {
    const result = await db.query<GetPhoneByDocument>('SELECT * FROM telefones WHERE cpf = $1', [document]);
    return result;
}
