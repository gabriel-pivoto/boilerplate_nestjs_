import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { IUsersRepository } from '../repositories/users.repository.interface';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: IUsersRepository) {}


  create(data: CreateUserDto) {
    return this.usersRepository.create(data);
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  update(id: string, data: UpdateUserDto) {
    return this.usersRepository.update(id, data);
  }

  remove(id: string) {
    return this.usersRepository.remove(id);
  }
}
