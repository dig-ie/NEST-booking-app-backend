import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('bookings') // Define o nome da tabela no banco
export class Booking {
  @Column()
  id: number;

  @Column()
  userId: number;

  @Column()
  roomId: number;

  @Column()
  checkIn: Date;

  @Column()
  checkOut: Date;

  @Column()
  totalPrice: number;
}
