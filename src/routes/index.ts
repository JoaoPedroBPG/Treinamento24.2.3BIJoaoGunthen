import { application, Router } from 'express';
import testsRouter from './tests.routes';
import Usuario from '../models/UsuarioModels';
import usuarioRouter from './usuario.routes';
import piuRouter from './piu.routes';

const routes = Router();

routes.use('/tests', testsRouter);

routes.use('/Usuario', usuarioRouter);

routes.use ('/piu', piuRouter);

export default routes;
