import { Task_type } from './../entity/Task_type';
import { Products } from './../entity/Products';
import { Tasks } from './../entity/Tasks';
import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

class TasksController {

    static newTask = async (req: Request, res: Response) => {
        const { task_title, datetime, id_taskType, id_product, id } = req.body

        const taskRepository = getRepository(Tasks)
        const productRepository = getRepository(Products)
        const taskTypeRepository = getRepository(Task_type)
        let task = new Tasks()

        let product;
        let task_type;

        try {
            product = await productRepository.findOneOrFail(id_product)
        } catch (error) {
            res.status(404).json({ message: 'No se encontro producto' })
        }

        try {
            task_type = await taskTypeRepository.findOneOrFail(id_taskType)
        } catch (error) {
            res.status(404).json({ message: 'No se encontro tarea' })
        }

        //si por body viene el id de la tarea actualiza, sino crea una nueva
        if (id) {
            try {
                task = await taskRepository.findOneOrFail(id)
            } catch (error) {
                res.status(404).json({ message: 'No se encontro tarea' })
            }
        }

        task.task_title = task_title
        task.task_type = task_type
        task.datetime = datetime
        task.product = product

        try {
            await taskRepository.save(task)
        } catch (error) {
            res.status(404).json({ message: 'Error al guardar la tarea' })
        }

        res.status(200).json({ message: 'Tarea cargada exitosamente' })
    }

    static getAllTasks = async (req: Request, res: Response) => {
        const taskRepository = getRepository(Tasks)
        let tasks;

        try {
            tasks = await taskRepository.find()
        } catch (error) {
            res.status(404).json({ message: 'No se encontraron resultados' })
        }

        if (tasks.length > 0) {
            res.send(tasks)
        } else {
            res.status(404).json({ message: 'error' })
        }
    }

    static deleteTask = async (req: Request, res: Response) => {
        const { id, deleted_at } = req.body
        const taskRepository = getRepository(Tasks)
        let taskToUpdate;

        try {
            taskToUpdate = await taskRepository.findOneOrFail(id)
            taskToUpdate.deleted_at = deleted_at
        } catch (error) {
            res.status(404).json({ message: 'No se encontraron resultados' })
        }

        try {
            await taskRepository.save(taskToUpdate)
        } catch (error) {
            res.status(404).json({ message: 'Error al actualizar' })
        }

        res.status(200).json({ message: 'Tarea eliminada exitosamente' })
    }

}

export default TasksController
