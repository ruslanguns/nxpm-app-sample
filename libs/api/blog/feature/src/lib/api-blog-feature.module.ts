import { Module } from '@nestjs/common'

import { ApiBlogFeatureController } from './api-blog-feature.controller'
import { ApiBlogFeatureResolver } from './api-blog-feature.resolver'
import { ApiBlogFeatureService } from './api-blog-feature.service'

@Module({
  controllers: [ApiBlogFeatureController],
  exports: [],
  imports: [],
  providers: [ApiBlogFeatureResolver, ApiBlogFeatureService],
})
export class ApiBlogFeatureModule {}
