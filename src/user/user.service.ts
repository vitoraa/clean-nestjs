import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository
  ) { }

  create (createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto)
  }

  findAll () {
    return this.userRepository.find();
  }

  findOne (id: string) {
    return `This action returns a #${id} user`;
  }

  update (id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove (id: string) {
    return `This action removes a #${id} user`;
  }
}
