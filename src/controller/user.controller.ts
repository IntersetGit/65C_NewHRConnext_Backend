import { createUserservice, Getalluser , me } from '../service/user.service';
import { Request, Response } from 'express';
import logger from '../utils/winston';
import prismaError from '../utils/prismaerror';

export const Getallusers = async (req: Request, res: Response) => {
  try {
    const result = await Getalluser();
    return res.status(200).send({
      data : result,
      status: 200,
    });
  } catch (error : any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
};

export const createUserhandler = async (req: Request, res: Response) => {
  try {
    const result = await createUserservice(req);
    res.status(200).send({
      user : result,
      code : 200
    });
  } catch (error : any) {
    return res.status(409).send(prismaError(error));
  }
}

export const getMe = async (req: Request, res: Response) => {
  try {
    if ( !req.user ) {
      return res.status(403).send({
        message : "You are not logged in or your session has expired",
        code : 403
      });
    }
    const result = await me(req.user.id);
    return res.status(200).send({
      data : result,
      status : 200
    });
  } catch (error : any) {
    return res.status(409).send(prismaError(error));
  }
};
