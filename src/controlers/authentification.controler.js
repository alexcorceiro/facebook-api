import jwt from 'jsonwebtoken';
import base64url from 'base64url';
import * as usersModel from '../model/usersModel';
import { HttpException, HttpStatus } from '../erros/HttpException.error';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const login = async (req, res) => {
  console.log('users:')
  const users = await usersModel.findByCredentials(req.body);
  if (!users) {
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }

 jwt.sign({ id: users.id }, 'secretkey');
  res.json({
    data: {
      token,
      users
    },
  });
}

export const jwtMiddleware = ({ secret }) =>
    async ({ headers: { authorization: token } }, _response, next) => {
        try {
            const { id } = jwt.verify(token, secret);
            const users = await usersModel.findById({ id });
            if (!users) {
                return next(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED));
            }

            request.user = user;

            next();
        } catch (error) {
            next(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED));
        }
    }
export const register = async (request, response) => {
      console.log("Creation users");
    const { email, password } = request.body;
    const users = await usersModel.createOne({ email, password });    
    response
    .status(201)
    .json({data:{users} });
  }
