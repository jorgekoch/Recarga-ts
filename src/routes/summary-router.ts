import { getSummary } from '../controllers/summary-controller';
import router from 'express';

const summaryRouter = router();

summaryRouter.get("/summary/:document", getSummary)

export default summaryRouter;