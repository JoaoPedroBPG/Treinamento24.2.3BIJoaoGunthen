import {Router, Request, Response} from 'express';
import { v4 as uuid } from "uuid";
import AddPiuService from "../services/AddPiuService";
import PiusRepository from '../repositories/PiusRepository';
import { usuarioRepository } from './usuario.routes';
import DeletePiuService from '../services/DeletePiuService';


const piuRouter = Router();
export const piuRepository = new PiusRepository();

piuRouter.post('/add', (request: Request, response: Response) => {
    try {
        const { userId, texto } = request.body;

        
        if (!userId || !texto) {
            return response.status(400).json("Complete todos os campos obrigatórios: userId e texto.");
        }

        const addPiuService = new AddPiuService(piuRepository, usuarioRepository);

        const piu = addPiuService.execute({ userId, texto, likes: 0, comentarios: 0, dataDePublicacao: new Date(), dataDeEdicao: new Date() });

        return response.status(200).json(piu);

    } catch (e: any) {
        return response.status(400).json({ error: e.message });
    }

    
});

piuRouter.get('/all', (request: Request, response: Response) => {
    try {
        const allPius = piuRepository.getAll();
        return response.status(200).json(allPius);
    } catch (e: any) {
        return response.status(400).json({ error: e.message });
    }
});

piuRouter.delete('/:id', (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        const deletePiuService = new DeletePiuService(piuRepository);
        const result = deletePiuService.execute(id);

        return response.status(200).json(result);
    } catch (e: any) {
        return response.status(400).json({ error: e.message });
    }
});

export default piuRouter;
