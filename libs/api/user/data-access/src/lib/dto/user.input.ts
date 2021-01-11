import { Field, InputType } from '@nestjs/graphql'
import { Role, UserCreateInput } from '@prisma/client'
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

@InputType()
export class UserInput implements UserCreateInput {
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @IsNotEmpty()
  username!: string

  @IsNotEmpty()
  @MinLength(8)
  password!: string

  firstName?: string

  lastName?: string

  phone?: string

  avatarUrl?: string

  developer?: boolean

  @Field(() => Role)
  role: Role

  location?: string

  bio?: string
}
