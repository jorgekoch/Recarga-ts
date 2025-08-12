import { Request, Response } from "express";
import { postPhoneService, getContactByDocument } from "../services/phone-service";
import { ContactBody, GetContactResponse } from "protocols";


export async function postPhone(req: Request, res: Response) {
    const contatos = await postPhoneService(req.body as ContactBody);
    return res.status(201).send(contatos);

}

export async function getContact(req: Request, res: Response ) {
    const { document } = req.params;
    const contact = await getContactByDocument(document);

    return res.status(200).send(contact);
}
