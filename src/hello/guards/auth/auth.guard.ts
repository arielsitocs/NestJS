import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

// Es un modulo que puede proteger a una funcion para que cumpla ciertas condiciones //
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    // Context es lo que se recibe en la peticion //
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    const request = context.switchToHttp().getRequest() as Request
    console.log(request.url)

    // Si la url de la peticion es solo /greet y no existe el header de authorization, no se ejecuta la funcion //
    if(request.url === '/greet' && !request.headers['Authorization']) {
      return false;
    }

    return true;
  }
}
