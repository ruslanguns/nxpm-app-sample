import { ApiAuthFeatureModule } from '@app-core/api/auth/feature'
import { ApiCoreFeatureModule } from '@app-core/api/core/feature'
import { ApiUserFeatureModule } from '@app-core/api/user/feature'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiAuthFeatureModule, ApiCoreFeatureModule, ApiUserFeatureModule],
})
export class AppModule {}
