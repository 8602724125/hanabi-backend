import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { CheckUsernameDto } from './dto/check-username.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) 
        private userModel: mongoose.Model<User>
        ) {}

    async find(): Promise<User[]> {
        try {
            const username = await this.userModel.find()
            return username;
        } catch (err) {
            return err;
        }
    }

    async create(user: User): Promise<Object> {
        try {
            const res =  await this.userModel.create(user)
            return {success: true, data: res};
        } catch (err) {
            return err;
        }
      }

    async checkUsername(user: CheckUsernameDto): Promise<Boolean> {
        try {
            const res =  await this.userModel.findOne({username: user.username}, {_id: 0, username: 1})
            if (res) {
                throw new UnprocessableEntityException('Username already exists');
            }
            return true;

        } catch (err) {
            return err
        }
      }
}
