import { Module } from '@nestjs/common'
import { ApiUserDataAccessModule } from '@app-core/api/user/data-access'
import { ApiUserFeatureResolver } from './api-user-feature.resolver'

@Module({
  imports: [ApiUserDataAccessModule],
  providers: [ApiUserFeatureResolver],
})
export class ApiUserFeatureModule {}
