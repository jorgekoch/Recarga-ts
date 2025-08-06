import express, { json, Request, Response } from 'express';
import phoneRouter from './routes/phone-router';
import errorHandler from './middlewares/errorHandler-middleware';
import rechargeRouter from './routes/recharge-router';
import summaryRouter from './routes/summary-router';

const app = express();
app.use(json());

app.get("health", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.use(phoneRouter);
app.use(rechargeRouter);
app.use(summaryRouter)
app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});