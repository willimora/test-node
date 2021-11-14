
import { Router } from 'express';
import ProductsController from '../controller/ProductsController';

const router = Router();

router.get('/', ProductsController.getAll);
router.post('/new', ProductsController.new)

export default router;
