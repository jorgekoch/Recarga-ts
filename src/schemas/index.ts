import joi from 'joi';
import { ContactData } from 'protocols';

const phoneSchema = joi.object<ContactData>({
    name: joi.string().required(),
    cpf: joi.string().pattern(/^\d{11}$/).required(), 
    phone: joi.array().items().min(1).max(3).required(),
    carrier: joi.string().required(),
    description: joi.string().required()
    }); 

export default phoneSchema;