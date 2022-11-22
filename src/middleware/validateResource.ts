
import { Request , Response , NextFunction} from 'express';
import { AnyZodObject } from 'zod';
const validate = (schms : AnyZodObject) => (req : Request,res : Response,next : NextFunction) => {
    try {
        schms.parse({
            body : req.body,
            query : req.query,
            params : req.params
        });
        next();
    } catch (error : any) {
        return res.status(400).send(error.errors);
    }
}

export default validate
