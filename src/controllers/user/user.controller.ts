import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService : UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.find();
  }

  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<Object> {
    return this.userService.create(user);
  }

  @Post('check-username')
  checkUserName(@Body() username: CreateUserDto): Promise<Boolean> {
    return this.userService.checkUsername(username);
  }
}
