import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';

// Aqui se importan todos los modulos y controladores para que la app pueda usarlos //
@Module({
  imports: [TasksModule, UsersModule, AuthModule],
  controllers: [AuthController, HelloController]
})
export class AppModule {}
