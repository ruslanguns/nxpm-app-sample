import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Role } from './role.model'

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string
  createdAt: Date
  updatedAt: Date
  email: string
  phone: string
  username?: string
  firstName?: string
  lastName?: string
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
