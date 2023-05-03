import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma.js';
import { hash, compare } from 'bcrypt';

const authController = {
  findUser: async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: {
          username: username.toLowerCase(),
        },
      });

      if (!user)
        return res
          .status(401)
          .json({ error: 'The username or password is incorrect' });

      const isPasswordValid = await compare(password, user.password);
      console.log(isPasswordValid);

      if (!isPasswordValid)
        return res
          .status(401)
          .json({ error: 'The username or password is incorrect' });

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
    const {
      username,
      password,
      firstName,
      lastName,
      q1,
      answerOne,
      q2,
      answerTwo,
      q3,
      answerThree,
    }: NewUser = req.body;

    const hashedPassword = await hash(password, 12);

    try {
      const newUser = await prisma.user.create({
        data: {
          username: username.toLowerCase(),
          password: hashedPassword,
          first_name: firstName,
          last_name: lastName,
          security: {
            create: {
              question_one: q1,
              answer_one: answerOne,
              question_two: q2,
              answer_two: answerTwo,
              question_three: q3,
              answer_three: answerThree,
            },
          },
        },
      });
      if (!newUser)
        return res.status(401).json({ error: 'Error creating user' });
      res.locals.newUser = newUser;
      return next();
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
