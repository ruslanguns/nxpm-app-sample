import { User } from '@app-core/api/user/data-access'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UserToken {
  /** JWT Bearer token */
  token: string

  @Field(() => User)
  user: User
}
