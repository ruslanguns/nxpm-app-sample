import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Post } from './post'
import { Role } from './role'

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string

  /** Creation date - This field is created automatically */
  @Field()
  createdAt?: Date

  /** Last updated date - This field is created automatically */
  @Field()
  updatedAt?: Date

  /** User email - Must be unique */
  @Field()
  email!: string

  @Field()
  phone?: string

  /** User username - Must be unique */
  @Field()
  username!: string

  @Field()
  firstName?: string

  @Field()
  lastName?: string

  /** User avatar image - By default extract gravatar related to email, but you can use another URL */
  @Field()
  avatarUrl?: string

  @Field()
  location?: string

  @Field()
  bio?: string

  @Field()
  password?: string

  @Field(() => Role, { nullable: true })
  role: Role

  posts: Post[]
}
