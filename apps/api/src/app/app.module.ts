import { ApiAuthFeatureModule } from '@app-core/api/auth/feature'
import { ApiCoreFeatureModule } from '@app-core/api/core/feature'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiAuthFeatureModule, ApiCoreFeatureModule],
})
export class AppModule {}
