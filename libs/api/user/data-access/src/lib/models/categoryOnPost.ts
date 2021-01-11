import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Category } from './category'

@ObjectType()
export class CategoryOnPost {
  @Field((type) => ID)
  categoryId: string

  @Field(() => Category, { nullable: true })
  category: Category
}
