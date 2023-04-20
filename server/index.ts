import express, {
  Express,
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
// console.log(process.env.DATABASE_URL);
console.log(`${process.env.DB_HOST}`);

app.use('*', (req: Request, res: Response, next: NextFunction) => {
  const err = {
    log: 'Not Found',
    status: 404,
    message: { error: 'Not Found' },
  };
  return next(err);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { error: 'An error occurred' },
  };
  const newError = { ...defaultError, ...err };
  console.log(newError);
  return res.status(newError.status).json(newError.message);
});

app.listen(3000, () => console.log(`Server running on port: ${PORT}`));
