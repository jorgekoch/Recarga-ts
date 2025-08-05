import { getContact, postContact } from '../controllers/phone-controller';
import router from 'express';
import validatePhoneSchema from '../middlewares/schema-middleware';
import { phoneSchema } from 'schemas';

const phoneRouter = router();

phoneRouter.post("/phones", validatePhoneSchema(phoneSchema), postContact);
phoneRouter.get("/phones/:document", getContact);

export default phoneRouter;