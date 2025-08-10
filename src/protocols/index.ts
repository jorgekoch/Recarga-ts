export type ContactData = {
    name: string;
    cpf: string;
    phone: string;
    carrier: string;
    description: string;
};

export type PhoneData = {
    id: string;
    name: string;
    cpf: string;
    phone: string;
    carrier: string;
    description: string;
};

export type GetPhone = {
    id: string,
    phone: string
};

export type GetPhoneByDocument = {
    id: string;
    cpf: string;
    phone: string;
}

export type CountPhonesByCpf = {
    id: string;
    cpf: string;
    count: number;
}

export type RechargeData = {
    phoneId: string;
    amount: number;
};

export type Recharge = {
    id: string;
    phoneId: string;
    amount: number;
};

export type GetPhoneById = {
    id: string;
    phone: string;  
};

export interface CustomError extends Error {
    type: string;
}

export type SummaryRepository = {
    id: string;
    name: string;
    cpf: string;
    phone: string;
    carrier: string;
    description: string;
    amount: number | null; // Amount can be null if no recharge exists
};