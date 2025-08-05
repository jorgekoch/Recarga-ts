import { countPhonesByCpf, getPhoneByDocument, getPhoneByNumber, postContact } from "../repositories/phone-repository";
import { ContactData } from "../protocols";
import { notFoundError, phoneLimitError, sameNumberError } from "../errors/error";

export async function createPhone(phoneData: ContactData) {
    const phones = Array.isArray(phoneData.phone) ? phoneData.phone : [phoneData.phone];

    const totalPhones = Number((await countPhonesByCpf(phoneData.cpf))?.rows?.[0]?.count || 0);
    if (totalPhones + phones.length > 3) throw phoneLimitError("número");

    for (const phoneNumber of phones) {
        const conflito = await getPhoneByNumber(phoneNumber);
        if (conflito && conflito.rowCount !== 0) throw sameNumberError("número");
    }

    let results = [];
    for (const phoneNumber of phones) {
        const novoTelefone = await postContact({ ...phoneData, phone: [phoneNumber] });
        results.push(novoTelefone);
    }
    return results;
}

export async function getContactByDocument(document: string) {
    const contact = await getPhoneByDocument(document);
    if (!contact || contact.rowCount === 0) {
        throw notFoundError("contato");
    }
    return contact.rows[0];
}