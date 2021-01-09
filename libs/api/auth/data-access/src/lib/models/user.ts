import { Field, ObjectType } from '@nestjs/graphql'
import { Role } from './role'

@ObjectType()
export class User {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  createdAt: Date

  @Field({ nullable: true })
  updatedAt: Date

  @Field({ nullable: true })
  email: string

  @Field({ nullable: true })
  phone: string

  @Field({ nullable: true })
  username?: string

  @Field({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  lastName?: string

  @Field({ nullable: true })
  avatarUrl?: string

  @Field({ nullable: true })
  location?: string

  @Field({ nullable: true })
  bio?: string

  @Field(() => Role, { nullable: true })
  role: Role

  password?: string

  @Field(() => [Post], { nullable: true })
  posts: Post[]
}

@ObjectType()
export class Post {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  title: string

  @Field(() => User, { nullable: true })
  author: User

  @Field(() => [CategoryOnPost], { nullable: true })
  categories: CategoryOnPost[]
}

@ObjectType()
export class Category {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  name: string
}

@ObjectType()
export class CategoryOnPost {
  @Field({ nullable: true })
  categoryId: string

  @Field(() => Category, { nullable: true })
  category: Category
}
