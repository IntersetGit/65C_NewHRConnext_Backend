import { Router } from 'express';
import validate from '../middleware/validateResource';
import { Login, Logout, RefreshToken } from '../controller/provider.controller';
import { loginproviderSchema } from '../schema/provider.schema';
import { authenticateToken } from '../middleware/authenticatetoken';

const r = Router();

r.post('/login',validate(loginproviderSchema),Login);
r.get('/logout',[authenticateToken],Logout);
r.get('/refresh',[authenticateToken],RefreshToken);

export default r;