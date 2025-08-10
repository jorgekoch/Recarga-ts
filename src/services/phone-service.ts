import { CountPhonesByCpf, getPhoneByDocument, getPhoneByNumber, postPhoneRepository } from "../repositories/phone-repository";
import { ContactData } from "../protocols";
import { notFoundError, phoneLimitError, sameNumberError } from "../errors/error";

export async function postPhoneService(phoneData: ContactData) {
    const currentPhoneCount = Number((await CountPhonesByCpf(phoneData.cpf))?.rows?.[0]?.count || 0);
    if (currentPhoneCount >= 3) { 
        throw phoneLimitError("número");
    }

    const existingPhone = await getPhoneByNumber(phoneData.phone);
    if (existingPhone) { 
        throw sameNumberError("número");
    }

    const novoTelefone = await postPhoneRepository(phoneData);

    return novoTelefone;
}

export async function getContactByDocument(document: string) {
    const contact = await getPhoneByDocument(document);

    if (!contact || contact.rowCount === 0) {
        throw notFoundError("contato");
    }

    const phoneNumbers = contact.rows.map(row => row.phone);

    return phoneNumbers;
}