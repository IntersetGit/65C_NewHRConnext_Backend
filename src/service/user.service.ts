import { PrismaClient } from '@prisma/client';
import {v4} from 'uuid';
import { Request } from 'express';
import { createuserInput } from '../schema/user.schema';
import { createPassword } from '../utils/passwords';
import _ from 'lodash';
('@prisma/client');

const prisma = new PrismaClient();

export const Getalluser = async () => {
  const result = prisma.user.findMany({
    select: {
      email: true,
      id: true,
      password: false,
      profile: true,
      company: true,
      role: true,
    },
  });
  
  return result;
};

export const createUserservice = async (req : Request<{},{},createuserInput>) => {
  const data = req.body;
  const id = v4();
  const profileid = v4();
  const createuser = await prisma.user.create({
    data : {
      id,
      email : data.email,
      password : await createPassword(data.password),
      roleId : "a3dd2099-28ab-4474-815b-5bc5ec4111f9",
      islogin : false,
      createdAt : new Date(),
      profile : {
        create : ({
          id : profileid,
          firstname : data.profile.firstname,
          lastname : data.profile.lastname,
          dob : new Date(data.profile.dob),
        })
      }
    }
  });
  const userdata = _.omit(createuser, 'password');
  return {
    user : userdata
  }
}

export const me = (id : string) => {
  const userdata = prisma.user.findUnique({
    where : {
      id
    },
    select : {
      id : true,
      email : true,
      profile : true,
      createdAt : true,
      role : true,
    }
  })
  return userdata
}