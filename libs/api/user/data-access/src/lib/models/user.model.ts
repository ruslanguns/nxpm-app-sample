import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Role } from '@app-core/api/auth/data-access'

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string

  /** Creation date - This field is created automatically */
  createdAt?: Date

  /** Last updated date - This field is created automatically */
  updatedAt?: Date

  /** User email - Must be unique */
  email!: string

  phone?: string

  /** User username - Must be unique */
  username!: string

  firstName?: string

  lastName?: string

  /** User avatar image - By default extract gravatar related to email, but you can use another URL */
  avatarUrl?: string

  location?: string

  bio?: string

  password?: string

  @Field(() => Role, { nullable: true })
  role: Role

  @Field(() => [Post], { nullable: true })
  posts: Post[]
}

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

@ObjectType()
export class Category {
  @Field((type) => ID)
  id: string

  name: string
}

@ObjectType()
export class CategoryOnPost {
  @Field((type) => ID)
  categoryId: string

  @Field(() => Category, { nullable: true })
  category: Category
}
