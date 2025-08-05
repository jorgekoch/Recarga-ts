import router from 'express';
import validatePhoneSchema from '../middlewares/schema-middleware';
import { rechargeSchema } from 'schemas';

const rechargeRouter = router();

rechargeRouter.post("/recharges", validatePhoneSchema(rechargeSchema), postRecharge);
// rechargeRouter.get("/recharges/:document", getRecharge);

export default rechargeRouter;