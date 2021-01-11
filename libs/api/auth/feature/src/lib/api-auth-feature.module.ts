import { forwardRef, Module } from '@nestjs/common'
import { ApiAuthDataAccessModule } from '@app-core/api/auth/data-access'
import { ApiAuthFeatureResolver } from './api-auth-feature.resolver'

@Module({
  imports: [forwardRef(() => ApiAuthDataAccessModule)],
  providers: [ApiAuthFeatureResolver],
})
export class ApiAuthFeatureModule {}
