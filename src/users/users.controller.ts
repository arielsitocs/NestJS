import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('/users')
export class UsersController {
    
    constructor(private userService: UsersService) {}

    @Get()
    // Agrega una descripcion sobre que hace esta ruta //
    @ApiOperation({ summary: 'Get all tasks.' })
    getAllUsers() {
        return this.userService.getUsers();
    }

    @Post()
    @ApiOperation({ summary: 'Creates an user.' })
    createUser(@Body() user: CreateUserDTO) {
        return this.userService.createUser(user);
    }
}
