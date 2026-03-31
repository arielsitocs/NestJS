import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import type { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        response.status(200).json({
            message: 'Hello World'
        })
    }

    @Get('/notFound')
    @HttpCode(404)
    notFoundPage() {
        return 'Pagina no encontrada.'
    }
    
    @Get('/error')
    @HttpCode(500)
    errorRoute() {
        return 'Error!!!'
    }

    // El parametro llega como string, aunque en la funcion lo hayamos tipeado como numero //
    // Por lo que hay que transformarlo a numero usando ParseIntPipe //
    @Get('/ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        console.log(typeof num)
        return num + 10;
    }

    @Get('/active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof status)
        return status
    }

    // Se pueden crear pipes personalizados para transformar varios atributos en el tipo deseado //
    @Get('/greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateUserPipe) query: { name: string, age: number  }) {
        console.log(typeof query.name)
        console.log(typeof query.age)
        return `Hola ${query.name}, tienes ${query.age} años.`
    }
}
