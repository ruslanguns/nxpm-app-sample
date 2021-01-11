import { Post, User } from '@app-core/api/user/data-access'
import { Parent, ResolveField, Resolver } from '@nestjs/graphql'

@Resolver(() => User)
export class ApiUserFeatureResolver {
  @ResolveField(() => [Post], { nullable: true })
  posts(@Parent() user: User) {
    return user.posts
  }
}
