import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma.js';

const authController = {
  findUser: async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (!user) return res.status(400).json({ error: 'User not found' });
      res.locals.user = user;
      return next();
    } catch (err) {
      return next({
        log: 'Error authenticating user',
        status: 400,
        message: { err },
      });
    }
  },

  createUser: async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    try {
      const newUser = await prisma.user.create({
        data: {
          email: email,
          password: password,
        },
      });
    } catch (err) {
      return next({
        log: 'Error creating user',
        status: 400,
        message: { err },
      });
    }
  },
};

export default authController;
