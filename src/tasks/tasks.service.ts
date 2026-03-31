import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Injectable()
export class TasksService {

    private tasks: any[] = [];

    getTasks() {
        return this.tasks;
    }

    getOneTask(id: number) {
        const foundTask = this.tasks.find((task) => task.id === id);

        if (foundTask) {
            return foundTask;
        } else {
            return new NotFoundException('Tarea no encontrada');
        }
    }

    createTask(task: CreateTaskDTO) {
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
        return task;
    }

    editTask(task: UpdateTaskDTO) {
        console.log(task)
        return 'editing task...'
    }

    patchTask() {
        return 'patching task...'
    }

    deleteTask() {
        return 'deleting task...'
    }
}
