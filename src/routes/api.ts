import { Router } from 'express';

import * as TodoController from '../controllers/todo.controller';

import {Todo} from '../models/Todo';


const router = Router();



router.get('/todo', TodoController.all);// pega todos do banco
router.post('/todo', TodoController.add); // adiciona no banco
router.put('/todo/:id',TodoController.update);//atualiza no banco
router.delete('/todo/:id',TodoController.remove);//deleta algum dado do banco

export default router;