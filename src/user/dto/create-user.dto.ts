import { UUID } from 'crypto';

// create-user.dto.ts
export class CreateUserDto {
  readonly id: number;
  readonly email: string;
  readonly name: string;
  readonly password: string;
}
