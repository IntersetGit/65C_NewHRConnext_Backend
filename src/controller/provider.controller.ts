import prismaError from "../utils/prismaerror";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { loginproviderInput } from "../schema/provider.schema";
import { fetchuserInfo, logOutservice } from "../service/provider.service";
import { comparePassword } from "../utils/passwords";
import _ from 'lodash';

export const Login = async (req: Request<{},{},loginproviderInput>, res: Response) => {
  try {
    const { email , password } = req.body;
    const user = await fetchuserInfo(email);
    if(!user) {
        res.status(400).send({
            message : "Invalid email or password",
            code : 400
        });
    }else{
        const compare = await comparePassword(password,user?.password);
        if(compare) {
            const credentials = {
                id : user?.id,
                email : user?.email,
                role : user?.role,
                company : user?.company,
                profile : user?.profile,
            };
            const secret = process.env.JWT_SECRET || "secret";
            const expire = process.env.JWT_EXPIRES_IN || "15m";
            const access_token = await jwt.sign(credentials, secret, { expiresIn: expire });
            const refresh_token = await jwt.sign(credentials, secret, { expiresIn: "7d" });
            res.cookie('access_token',access_token,{
                httpOnly : true
            })
            res.status(200).send({access_token,refresh_token});
        }else{
            res.status(400).send({
                message : "Password is incorrect",
                code : 400
            });
        }
    }
  } catch (error: any) {
    return res.status(409).send(prismaError(error));
  }
};

export const Logout = async (req: Request, res: Response) => {
    try {
        if(!req.user) return res.status(403).send({
            message : "You are not logged in or your session has expired",
            code : 403
        });
        const result = await logOutservice(req.user?.id);
        res.status(200).send({
            message : "Logout successful",
            code : 200,
            success : true
        });
    } catch (error : any) {
        return res.status(409).send(prismaError(error));
    }
    
}

export const RefreshToken = async (req: Request, res: Response) => {
    try {
        if(!req.user) return res.status(403).send({
            message : "You are not logged in or your session has expired",
            code : 403
        });
        const secret = process.env.JWT_SECRET || "secret";
        const expire = process.env.JWT_EXPIRES_IN || "15m";
        const credentials = await _.omit(req.user,'exp','iat');
        const access_token = jwt.sign(credentials, secret, { expiresIn: expire });
        res.status(200).send({access_token});
    } catch (error : any) {
        return res.status(409).send(prismaError(error));
    }
}