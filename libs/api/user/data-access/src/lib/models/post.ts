import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Category } from './category'
import { User } from './user.model'

@ObjectType()
export class Post {
  @Field((type) => ID)
  id: string

  @Field()
  title: string

  @Field(() => User, { nullable: true })
  author: User

  @Field(() => [Category], { nullable: true })
  categories: Category[]
}
