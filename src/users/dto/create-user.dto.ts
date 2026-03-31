import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator"

export class CreateUserDTO {
    
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    password: string
}