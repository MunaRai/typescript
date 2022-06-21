import { Request, Response, Router } from 'express';
import { findAll, findById } from '../Services/ItemsService';

export const itemsRouter: Router = Router();

//GET Http Method

//Get all items
itemsRouter.get('/', async(req: Request, res:Response) => {
    try {
        const result = await findAll();
        res.send(result);
    } catch(error) {
        res.status(404).send('Error');
    }
});

//Get by ID
itemsRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const result = await findById(Number(req.params.id));
        res.json(result);
    }catch(error){
        res.status(404).json('Error');
    }
});