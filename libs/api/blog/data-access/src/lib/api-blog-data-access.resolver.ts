import { Resolver } from '@nestjs/graphql'

import { ApiBlogDataAccessService } from './api-blog-data-access.service'

@Resolver()
export class ApiBlogDataAccessResolver {
  constructor(private readonly service: ApiBlogDataAccessService) {}
}
