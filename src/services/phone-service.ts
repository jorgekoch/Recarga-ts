import { Request } from "express";
import { ContactData } from "protocols";

export async function postPhoneService(req: Request) {

    const contactData = req.body as ContactData;
    return(contactData);

}