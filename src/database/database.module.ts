import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo do banco de dados (pode ser 'mysql', 'mariadb', etc)
      host: 'localhost', // Endereço do host (por exemplo, 'localhost' ou um endereço IP)
      port: 3306, // Porta padrão do MySQL
      username: 'root', // Usuário do banco de dados
      password: 'Fandolol123!', // Senha do banco de dados
      database: 'bookingapp', // Nome do banco de dados
      entities: [User], // Aqui você adiciona as entidades que representam as tabelas do banco
      synchronize: true, // Em desenvolvimento, você pode usar true, mas em produção use false
    }),
  ],
})
export class DatabaseModule {}
