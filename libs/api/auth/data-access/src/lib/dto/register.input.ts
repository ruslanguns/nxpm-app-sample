import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'
import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class RegisterInput {
  @IsNotEmpty()
  @IsEmail()
  email: string

  username?: string

  firstName?: string

  lastName?: string

  phone?: string

  avatarUrl?: string

  @IsNotEmpty()
  @MinLength(8)
  password: string
}
