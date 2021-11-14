import { Router } from 'express'
import products from './products'
import tasks from './tasks'

const routes = Router();

routes.use('/products', products)
routes.use('/tasks', tasks)

export default routes;
