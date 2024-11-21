import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import * as dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo do banco de dados
      host: process.env.DB_HOST, // Endereço do host (use a variável de ambiente ou 'localhost' como fallback)
      port: parseInt(process.env.DB_PORT, 10) || 3306, // Porta (use a variável de ambiente ou 3306 como fallback)
      username: process.env.DB_USER, // Usuário (use a variável de ambiente ou 'root' como fallback)
      password: process.env.DB_PASSWORD, // Senha (use a variável de ambiente ou uma string vazia como fallback)
      database: process.env.DB_NAME, // Nome do banco de dados (use a variável de ambiente ou 'bookingapp' como fallback)
      entities: [User], // Entidades do banco de dados
      synchronize: true, // Em desenvolvimento, use true; em produção, defina como false
    }),
  ],
})
export class DatabaseModule {}
