import { Module } from '@nestjs/common'

import { ApiBlogDataAccessController } from './api-blog-data-access.controller'
import { ApiBlogDataAccessResolver } from './api-blog-data-access.resolver'
import { ApiBlogDataAccessService } from './api-blog-data-access.service'

@Module({
  controllers: [ApiBlogDataAccessController],
  exports: [],
  imports: [],
  providers: [ApiBlogDataAccessResolver, ApiBlogDataAccessService],
})
export class ApiBlogDataAccessModule {}
