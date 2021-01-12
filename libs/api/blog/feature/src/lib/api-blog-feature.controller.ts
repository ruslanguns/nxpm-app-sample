import { Controller } from '@nestjs/common'

import { ApiBlogFeatureService } from './api-blog-feature.service'

@Controller()
export class ApiBlogFeatureController {
  constructor(private readonly auth: ApiBlogFeatureService) {}
}
