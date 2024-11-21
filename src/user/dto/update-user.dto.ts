import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  id: number; // Garantir que o id seja informado

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;
}
