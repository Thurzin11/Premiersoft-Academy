import { Router } from 'express';
import { livroController } from '../controller/livroController';

const router = Router();

router.post('/livros', livroController.criar);
router.get('/livros', livroController.listar);
router.get('/livros/:id', livroController.buscarPorId);
router.put('/livros/:id', livroController.atualizar);
router.delete('/livros/:id', livroController.deletar);

export default router;