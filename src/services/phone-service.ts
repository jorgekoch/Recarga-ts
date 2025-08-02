import { countPhonesByCpf, getPhoneByNumber, postContact } from "../repositories/phone-repository";
import { ContactData } from "../protocols";
import { phoneLimitError, sameNumberError } from "../errors/error";

export async function createPhone(phoneData: ContactData) {
    const phones = Array.isArray(phoneData.phone) ? phoneData.phone : [phoneData.phone];

    // Verifica quantos telefones já existem para o CPF no banco
    const totalPhones = Number((await countPhonesByCpf(phoneData.cpf))?.rows?.[0]?.count || 0);
    if (totalPhones + phones.length > 3) throw phoneLimitError("número");

    // Verifica se algum número já existe no banco
    for (const phoneNumber of phones) {
        const conflito = await getPhoneByNumber(phoneNumber);
        if (conflito && conflito.rowCount !== 0) throw sameNumberError("número");
    }

    // Cadastra cada telefone individualmente
    let results = [];
    for (const phoneNumber of phones) {
        const novoTelefone = await postContact({ ...phoneData, phone: [phoneNumber] });
        results.push(novoTelefone);
    }
    return results;
}