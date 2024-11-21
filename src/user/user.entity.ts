import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // Define o nome da tabela no banco
export class User {
  @PrimaryGeneratedColumn('increment') // 'increment' é o padrão e gera um ID numérico (integer)
  id: number; // Aqui o tipo do ID é number, pois é um inteiro

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
