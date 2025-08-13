export type ContactData = {
    name: string;
    cpf: string;
    phone: string;
    carrier: string;
    description: string;
};

export type PhoneData = {
    id: number;
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
    id: number;
    cpf: string;
    phone: string;
}

export type CountPhonesByCpf = {
    count: string;
}

export type RechargeData = {
    phoneId: string;
    amount: number;
};

export type Recharge = {
    id: number;
    phoneId: string;
    amount: number;
};

export type GetPhoneById = {
  id: number;
  phone_id: number;
  amount: number;
  phone: string;
};

export interface CustomError extends Error {
    type: string;
}

export type SummaryRepository = {
    name: string;
    cpf: string;
    phone: string;
    carrier: string;
    description: string;
    amount: number | null;
};

export type ContactBody = {
    name: string;
    document: string;
    phone: string;
    cpf: string;       
    carrier: string;   
    description: string; 
};

export type GetContactResponse = string[] | { message: string };

export type GetRechargeResponse = string[] | { message: string };

export type PostRechargeResponse = Recharge | { message: string };

export type RechargeSummary = {
  amount: number;
};

export type PhoneSummary = {
  phone: string;
  carrier: { name: string };
  recharges: RechargeSummary[];
};

export type SummaryResponse = {
  document: string;
  name: string;
  phones: PhoneSummary[];
};