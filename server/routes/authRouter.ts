import express, {
  Express,
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
const authRouter = express.Router();
import authController from '../controllers/authController.js';

authRouter.post(
  '/login',
  authController.findUser,
  (req: Request, res: Response) => {
    return res.status(200);
  }
);

authRouter.post(
  '/signup',
  authController.createUser,
  (req: Request, res: Response) => {
    return res.status(200);
  }
);

export default authRouter;
