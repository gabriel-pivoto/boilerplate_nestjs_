import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../../../generated/prisma';

export abstract class IUsersRepository {
  abstract create(data: CreateUserDto): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract findOne(id: string): Promise<User | null>;
  abstract update(id: string, data: UpdateUserDto): Promise<User>;
  abstract remove(id: string): Promise<void>;
}
