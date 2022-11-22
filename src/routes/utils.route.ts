import { Router } from "express";
import {v4} from 'uuid';

const r = Router();

r.get('/uuid', async (req,res) => {
    const id = v4();
    res.status(200).send({uuid : id})
}); 

export default r;