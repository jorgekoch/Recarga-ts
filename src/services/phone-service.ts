import { getPhoneByNumber, postContact } from "../repositories/phone-repository";
import { ContactData } from "../protocols";
import { samenumberError } from "errors/errors";

export async function createPhone(phoneData: ContactData) {
    const conflito = await getPhoneByNumber(phoneData.phone);
    if (conflito.rowCount !== 0) throw samenumberError("número");

    const novoTelefone = await postContact(phoneData);
    return novoTelefone;
}