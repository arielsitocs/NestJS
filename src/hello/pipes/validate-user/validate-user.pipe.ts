import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Value: ', value)

    // Toma el age que se recibe desde la peticion(value) y lo transforma a numero //
    const ageNumber = parseInt(value.age, 10)

    // Si el el resultado de la transformacion no es un numero, lanza una excepcion de http //
    if(isNaN(ageNumber)) {
      throw new HttpException('La edad debe ser un numero', HttpStatus.BAD_REQUEST)
    } else {
      return { ...value, age: ageNumber }
    }

    return value;
  }
}
