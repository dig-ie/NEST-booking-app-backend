import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // Define o nome da tabela no banco
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number; 

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
