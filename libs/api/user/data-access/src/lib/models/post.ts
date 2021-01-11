import { Field, ID, ObjectType } from '@nestjs/graphql'
import { CategoryOnPost } from './categoryOnPost'
import { User } from './user.model'

@ObjectType()
export class Post {
  @Field((type) => ID)
  id: string

  title: string

  @Field(() => User, { nullable: true })
  author: User

  @Field(() => [CategoryOnPost], { nullable: true })
  categories: CategoryOnPost[]
}
