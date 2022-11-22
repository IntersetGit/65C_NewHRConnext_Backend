import { createUserhandler, Getallusers, getMe } from '../controller/user.controller';
import validate from '../middleware/validateResource';
import { createuserSchema } from '../schema/user.schema';
import { Router } from 'express';
import { authenticateToken } from '../middleware/authenticatetoken';

const r = Router();
r.get('/' , [authenticateToken] ,Getallusers );
r.post('/' , validate(createuserSchema) ,createUserhandler );
r.get('/me' , [authenticateToken] , getMe )
export default r;
