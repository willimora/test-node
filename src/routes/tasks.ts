
import { Router } from 'express';
import TasksController from '../controller/TasksController';

const router = Router();

router.post('/newtask', TasksController.newTask);
router.get('/getalltasks', TasksController.getAllTasks)
router.patch('/deletetask', TasksController.deleteTask)

export default router;
