import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // Certifique-se de importar o TypeOrmModule
import { Booking } from './booking.entity';
import { DatabaseModule } from '../database/database.module'; // Importe o módulo de banco de dados

@Module({
  imports: [
    DatabaseModule, // Importa o módulo de banco de dados
    TypeOrmModule.forFeature([Booking]), // Registra o repositório da entidade Booking
  ],
  controllers: [BookingController], // Registra o controller
  providers: [BookingService], // Registra o service
})
export class UserModule {}
