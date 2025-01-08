import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res, NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res): Promise<User> {
    return res.status(200).send(await this.usersService.create(createUserDto));
  }

  @Get()
  async findAll(@Res() res): Promise<User[]> {
    return res.status(200).send(await this.usersService.findAll());
  }

  @Get(':id')
  async findOne(@Param('id') id: string,@Res() res) {
    const userFound: User | NotFoundException = await this.usersService.findOne(id);
    if (userFound) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).send(userFound);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto):Promise<User | NotFoundException> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
