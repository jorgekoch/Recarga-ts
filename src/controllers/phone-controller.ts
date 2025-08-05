import { Request, Response } from "express";
import { createPhone, getContactByDocument } from "../services/phone-service";


export async function postContact(req: Request, res: Response) {
    const contatos = await createPhone(req.body);
    const contato = Array.isArray(contatos) ? contatos[0] : contatos;
    return res.status(201).send(contato);

}

export async function getContact(req: Request, res: Response) {
    const { document } = req.params;
    const contact = await getContactByDocument(document);

    return res.status(200).send(contact);
}