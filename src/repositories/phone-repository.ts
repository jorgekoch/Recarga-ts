import db from 'database';
import { ContactData } from 'protocols';

export async function postContact(contactData: ContactData) {
    const query = 'INSERT INTO phones (number, name) VALUES ($1, $2) RETURNING *';
    const values = [contactData.phone, contactData.name];
    
    const result = await db.query(query, values);
    return result.rows[0]; // Return the inserted contact   
}

export async function getPhoneByNumber(number: string) {
    const query = 'SELECT * FROM phones WHERE number = $1';
    const values = [number];    
    const result = await db.query(query, values);
    if (result.rows.length > 0) {
        return result.rows[0]; 
    }

    return null; 
}