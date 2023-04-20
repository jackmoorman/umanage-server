import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Server running on port: ${PORT}`));
