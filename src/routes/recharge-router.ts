import router from 'express';
import validatePhoneSchema from '../middlewares/schema-middleware';
import { rechargeSchema } from '../schemas';
import { getRecharge, postRecharge } from '../controllers/recharge-controller';

const rechargeRouter = router();

rechargeRouter.post("/recharges", validatePhoneSchema(rechargeSchema), postRecharge);
rechargeRouter.get("/recharges/:number", getRecharge);

export default rechargeRouter;