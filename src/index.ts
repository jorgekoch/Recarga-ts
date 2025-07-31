import express, { json, Request, Response } from 'express';
import phoneRouter from './routes/phone-router';

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("OK");
});

app.use(phoneRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});