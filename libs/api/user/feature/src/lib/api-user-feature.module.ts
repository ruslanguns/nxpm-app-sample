import { Module } from '@nestjs/common'
import { ApiUserDataAccessModule } from '@app-core/api/user/data-access'

@Module({
  imports: [ApiUserDataAccessModule],
  providers: [],
})
export class ApiUserFeatureModule {}
