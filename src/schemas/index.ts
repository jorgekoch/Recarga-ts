import joi from 'joi';
import { ContactData, RechargeData } from 'protocols';

const phoneSchema = joi.object<ContactData>({
    name: joi.string().required(),
    cpf: joi.string().pattern(/^\d{11}$/).required(), 
    phone: joi.string().required(),
    carrier: joi.string().required(),
    description: joi.string().required()
    }); 

const rechargeSchema = joi.object<RechargeData>({
    phoneId: joi.string().required(),
    amount: joi.number().greater(0).required()
});

export { phoneSchema, rechargeSchema };