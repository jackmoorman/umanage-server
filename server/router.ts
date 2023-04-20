import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';

const apiRouter = express.Router();

apiRouter.get(
  '/user/:id',
  (req: Request, res: Response, next: NextFunction) => {}
);
