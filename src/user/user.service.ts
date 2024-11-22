import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // Método para buscar todos os usuários
  async findAll() {
    const users = await this.userRepository.find();
    return users.map((user) => this.excludePassword(user)); // Exclui a senha antes de retornar
  }

  // Método para buscar um usuário por ID
  // async findOne(id: string) {
  //   const user = await this.userRepository.findOne({ where: { id } });
  //   if (!user) {
  //     throw new NotFoundException(`User with id ${id} not found`); // Lançar exceção se o usuário não for encontrado
  //   }
  //   return this.excludePassword(user); // Exclui a senha antes de retornar
  // }

  // Função de exemplo para hash de senha (caso esteja utilizando)
  private async hashPassword(password: string): Promise<string> {
    const bcrypt = require('bcrypt');
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }
  // Método para criar um novo usuário
  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    await this.userRepository.save(newUser);
    // return this.excludePassword(savedUser); // Exclui a senha do usuário antes de retornar
  }

  // Função auxiliar para excluir a senha antes de retornar a resposta
  private excludePassword(user: User) {
    const { password, ...result } = user; // Desestrutura para excluir a senha
    return result;
  }

  // Método para atualizar um usuário
  // async update(id: string, updateUserDto: UpdateUserDto) {
  //   // Verificar se o usuário existe no banco de dados
  //   const user = await this.userRepository.findOne({ where: { id } });

  //   // Caso o usuário não seja encontrado, lançar exceção
  //   if (!user) {
  //     throw new NotFoundException(`User with id ${id} not found`);
  //   }

  //   // Atualiza os campos do usuário com as informações do DTO
  //   Object.assign(user, updateUserDto);

  //   // Verifica se há mudanças no campo de senha e, se necessário, realiza a validação de senha
  //   if (updateUserDto.password) {
  //     // Exemplo de validação de senha (opcional)
  //     if (updateUserDto.password.length < 6) {
  //       throw new BadRequestException(
  //         'Password must be at least 6 characters long',
  //       );
  //     }
  //     // Se necessário, faça um hash da senha antes de salvar
  //     user.password = await this.hashPassword(updateUserDto.password);
  //   }

  //   // Salva as alterações no banco de dados
  //   const updatedUser = await this.userRepository.save(user);

  //   // Retorna o usuário atualizado, mas sem a senha
  //   return this.excludePassword(updatedUser);
  // }
  // // Método para remover um usuário
  // async remove(id: string) {
  //   const user = await this.userRepository.findOne({ where: { id } });
  //   if (!user) {
  //     throw new NotFoundException(`User with id ${id} not found`); // Lançar exceção se o usuário não for encontrado
  //   }

  //   await this.userRepository.remove(user);
  //   return { message: `User with id ${id} has been removed successfully` }; // Retorna uma mensagem após a remoção
  // }
}
