import { getSummaryRepository } from "../repositories/summary-repository";

export async function getSummaryService(document: string) {
    const result = await getSummaryRepository(document);

    if (result.length === 0) {
        return { document, phones: [] };
    }

    const summary = {
        document: result[0].cpf, 
        name: result[0].name, 
        phones: []
    };

    const phonesMap = {};

    result.forEach(row => {
        if (!phonesMap[row.phone]) {
            phonesMap[row.phone] = {
                phone: row.phone, 
                carrier: { name: row.carrier },
                recharges: []
            };
            summary.phones.push(phonesMap[row.phone]);
        }
        
        if (row.amount) {
            phonesMap[row.phone].recharges.push({
                amount: row.amount
            });
        }
    });

    return summary;
}