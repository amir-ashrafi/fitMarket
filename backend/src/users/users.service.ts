import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
     constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}
  async findByEmail(email:string){
    return this.userModel.findOne({email})
  }
  async create(data:Partial<User>){
    const user = new this.userModel(data);
    return user.save();
  }
  async updateRefreshToken(userId:string , refreshToken:string|null){
    if (!refreshToken) {
    await this.userModel.findByIdAndUpdate(userId, {
      refreshTokenHash: null,
    });
    return;
  }
    const hash = await bcrypt.hash(refreshToken, 10);
    await this.userModel.findByIdAndUpdate(userId , {
      refreshTokenHash:hash,
    })
  }
}

