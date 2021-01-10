import { InputType } from '@nestjs/graphql'
import { IsNotEmpty, MinLength } from 'class-validator'

@InputType()
export class LoginInput {
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  @MinLength(8)
  password: string
}
