import { Field, ObjectType } from '@nestjs/graphql'
import { User } from './user.model'

@ObjectType()
export class UserToken {
  /** JWT Bearer token */
  token: string

  @Field(() => User)
  user: User
}
