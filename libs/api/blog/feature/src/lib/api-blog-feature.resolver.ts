import { Resolver } from '@nestjs/graphql'

import { ApiBlogFeatureService } from './api-blog-feature.service'

@Resolver()
export class ApiBlogFeatureResolver {
  constructor(private readonly service: ApiBlogFeatureService) {}
}
