import { IsString, MinLength } from "class-validator"

export class CreateTaskDTO {

    @IsString()
    @MinLength(2)
    title: string
    
    @IsString()
    @MinLength(10)
    description: string
}