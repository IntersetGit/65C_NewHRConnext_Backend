import { PrismaClient } from '@prisma/client';
import logger from '../utils/winston';


const prisma = new PrismaClient();


export const fetchuserInfo = async (email : string) => {
    const result = await prisma.user.findUnique({
        where : {
            email : email
        },
        select : {
            email : true,
            id : true,
            password : true,
            profile : true,
            company : true,
            role : true,
        }
    })
    const setonline = await prisma.user.update({
        where : {
            id : result?.id
        },
        data : {
            islogin : true
        }
    });
    logger.info(`User ${setonline?.email} is online`);
    return result;
}

export const logOutservice = async (id : string) => {
    const logout = await prisma.user.update({
        where : {
            id : id
        },
        data : {
            islogin : false
        }
    });
    logger.info(`User ${logout?.email} is offline`);
    return logout;
}