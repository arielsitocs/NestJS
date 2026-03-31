import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UsersService, PrismaService],
  controllers: [UsersController]
})

// Se crea el configure que permite el uso del middleware creado //
export class UsersModule implements NestModule {
  // Se aplica el middleware a las rutas configuradas //
  configure(consumer: MiddlewareConsumer) {
    // consumer
    // .apply(LoggerMiddleware).forRoutes('/users')
    // .apply(AuthMiddleware).forRoutes({ path: '/users', method: RequestMethod.POST || RequestMethod.DELETE || RequestMethod.PUT })
  }

  // Forma para establecer el middleware a rutas especificas //
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware).forRoutes({ path: '/users', method: RequestMethod.GET })
  // }
}
