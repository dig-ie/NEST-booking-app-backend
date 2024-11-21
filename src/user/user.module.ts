import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // Certifique-se de importar o TypeOrmModule
import { User } from './user.entity'; // Importa a entidade User
import { DatabaseModule } from '../database/database.module'; // Importe o módulo de banco de dados

@Module({
  imports: [
    DatabaseModule,  // Importa o módulo de banco de dados
    TypeOrmModule.forFeature([User]),  // Registra o repositório da entidade User
  ],
  controllers: [UserController],  // Registra o controller
  providers: [UserService],  // Registra o service
})
export class UserModule {}
