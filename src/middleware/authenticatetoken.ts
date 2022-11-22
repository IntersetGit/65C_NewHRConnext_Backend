import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authheader = req.headers['authorization'];
  const secret = process.env.JWT_SECRET || 'secret';
  const token = authheader && authheader.split(' ')[1];
  if (!token) {
    return res.status(401).send({ message: 'Access denied', code: 401 });
  }
  jwt.verify(token, secret, async (error, message : any) => {
    if ( error ) {
        return res.status(403).send({ message: 'Invalid token or token expired', code: 403 });
    }
    req.user = message;
    next();
  });
};
