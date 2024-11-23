import {Router, Request, Response} from 'express';
import { v4 as uuid } from "uuid";
import AddUsuarioService from '../services/AddUsuarioService';
import UsuarioRepository from '../repositories/UsuarioRepository';
import GetUsuarioService from '../services/GetUsuarioService';

const usuarioRouter = Router();
export const usuarioRepository = new UsuarioRepository();

usuarioRouter.post('/add', (request: Request, response: Response) => {
    try{

        const { nome, email, senha, telefone, cpf, dataDeNascimento} = request.body;

        
        if(!nome || !email || !senha || !telefone || !cpf || !dataDeNascimento){
            return response.status(400).json("Complete todos os campos");
        }
    
        const addUsuarioService = new AddUsuarioService(usuarioRepository);
    
        const usuario = addUsuarioService.execute({ nome, email, senha, telefone, cpf, dataDeNascimento,  id: uuid() });   
    
        return response.status(200).json(usuario);

    } catch (e: any){
        return response.status(400).json({error: e.message});
    }

})

usuarioRouter.get('/getAll', (request: Request, response: Response) => {
    const usuario = usuarioRepository.getAll();
    return response.status(200).json(usuario);
})

usuarioRouter.get('/:id', (request: Request, response: Response) => {
    try{
        
        const { id } = request.params;

        const getUsuarioService = new GetUsuarioService(usuarioRepository);

        getUsuarioService.execute({ id });

        const usuario = usuarioRepository.getById(id);
        
        return response.status(200).json(usuario);

    } catch (e: any){
        return response.status(400).json({error: e.message});
    }
})


export default usuarioRouter;