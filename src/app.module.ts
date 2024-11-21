import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module'; // Certifique-se de importar o UserModule (ou qualquer outro módulo que você tenha)

@Module({
  imports: [
    DatabaseModule,  // Importa o módulo de banco de dados para garantir que a conexão seja configurada
    UserModule,      // Certifique-se de que o módulo que contém seus recursos de usuários (ou outros módulos) seja importado aqui
  ],
  controllers: [AppController],  // Controlador principal
  providers: [AppService],      // Serviços principais
})
export class AppModule {}
