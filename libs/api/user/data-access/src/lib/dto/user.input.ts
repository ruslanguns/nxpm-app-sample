import { Field, InputType } from '@nestjs/graphql'
import { UserCreateInput } from '@prisma/client'
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'
import { Role } from '../models/role'

@InputType()
export class UserInput implements UserCreateInput {
  @IsNotEmpty()
  @IsEmail()
  @Field()
  email!: string

  @IsNotEmpty()
  @Field()
  username!: string

  @IsNotEmpty()
  @MinLength(8)
  @Field()
  password!: string

  @Field()
  firstName?: string

  @Field()
  lastName?: string

  @Field()
  phone?: string

  @Field()
  avatarUrl?: string

  @Field()
  developer?: boolean

  @Field(() => Role)
  role: Role

  @Field()
  location?: string

  @Field()
  bio?: string
}
