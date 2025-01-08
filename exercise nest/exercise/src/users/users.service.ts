import { ExecutionContext, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { In, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { generateHash } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const password = generateHash(createUserDto.password);
    const user = this.userRepository.create({ ...createUserDto, password });
    user.status = true;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User | NotFoundException> {
    try {
      const userFound: User = await this.userRepository.findOne({ where: { id: id } });
      if (!userFound) {
        return new NotFoundException();
      }
      return userFound;
    } catch (e) {
      console.error(e);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | NotFoundException> {
    try {
      const userFound: User = await this.userRepository.findOne({ where: { id: id } });
      if (!userFound) {
        return new NotFoundException();
      }
      return await this.userRepository.update(id, updateUserDto);
    } catch (e) {
      console.error(e);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
