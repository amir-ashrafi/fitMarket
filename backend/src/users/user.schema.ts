import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type UserDocument = User & Document
export enum Role{
    ADMIN = 'admin',
    USER = 'user',
}
@Schema({timestamps:true})
export class User{
    @Prop({required:true , unique:true,lowercase:true})
    email:string;
    @Prop({required:true,})
    password:string;
    @Prop({enum:Role , default:Role.USER})
    role:Role
    @Prop({default:true})
    isActive:boolean;
    @Prop()
    refreshTokenHash?:string;
}
export const UserSchema = SchemaFactory.createForClass(User)