import { Controller } from '@nestjs/common'

import { ApiBlogDataAccessService } from './api-blog-data-access.service'

@Controller()
export class ApiBlogDataAccessController {
  constructor(private readonly auth: ApiBlogDataAccessService) {}
}
