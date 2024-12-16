import { Router } from 'express';
import { recipeController } from '../controllers/recipeController';

const router = Router();

router.post('/recipes', recipeController.create);

router.get('/recipes', recipeController.list);

router.get('/recipes/:id', recipeController.getById);

router.put('/recipes/:id', recipeController.update);

router.delete('/recipes/:id', recipeController.delete);

router.get('/recipes/search', recipeController.search);


export default router;