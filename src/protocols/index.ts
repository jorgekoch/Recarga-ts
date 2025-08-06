export type ContactData = {
    name: string;
    cpf: string;
    phone: string;
    carrier: string;
    description: string;
};

export type RechargeData = {
    phoneId: string;
    amount: number;
};


export interface CustomError extends Error {
    type: string;
}