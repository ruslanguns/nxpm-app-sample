import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, MinLength } from 'class-validator'

@InputType()
export class LoginInput {
  @IsNotEmpty()
  @Field()
  email: string

  @IsNotEmpty()
  @MinLength(8)
  @Field()
  password: string
}
