import { Controller, Get, Post, Put, Delete, Patch, Body, Query, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('/tasks')
export class TasksController {

    constructor(private taskService: TasksService) {
        this.taskService = taskService;
    }

    @Get()
    @ApiOperation({ summary: 'Get all tasks.' })
    @ApiResponse({ status: 200, description: 'Returns all tasks.' })
    getAllTasks(@Query() query: any) {
        console.log(query)
        return this.taskService.getTasks();
    }

    @Get('/:id')
    getOneTask(@Param('id') id: string) {
        return this.taskService.getOneTask(parseInt(id));
    }

    @Post()
    createTask(@Body() task: CreateTaskDTO) {
        return this.taskService.createTask(task);
    }

    @Put()
    editTask(@Body() task: UpdateTaskDTO) {
        return this.taskService.editTask(task);
    }

    @Patch()
    patchTask() {
        return this.taskService.patchTask();
    }

    @Delete()
    deleteTask() {
        return this.taskService.deleteTask();
    }
}
