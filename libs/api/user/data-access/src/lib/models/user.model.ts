import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Post } from './post'
import { Role } from './role'

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string

  /** Creation date - This field is created automatically */
  @Field({ nullable: true })
  createdAt?: Date

  /** Last updated date - This field is created automatically */
  @Field({ nullable: true })
  updatedAt?: Date

  /** User email - Must be unique */
  @Field()
  email!: string

  @Field({ nullable: true })
  phone?: string

  /** User username - Must be unique */
  @Field()
  username!: string

  @Field({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  lastName?: string

  /** User avatar image - By default extract gravatar related to email, but you can use another URL */
  @Field({ nullable: true })
  avatarUrl?: string

  @Field({ nullable: true })
  location?: string

  @Field({ nullable: true })
  bio?: string

  @Field({ nullable: true })
  password?: string

  @Field(() => Role, { nullable: true })
  role: Role

  posts: Post[]
}
