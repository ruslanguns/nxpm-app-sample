import { ApiCoreDataAccessModule } from '@app-core/api/core/data-access'
import { ApiCoreFeatureModule } from '@app-core/api/core/feature'
import { ApiUserDataAccessModule } from '@app-core/api/user/data-access'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { ApiAuthDataAccessService } from './api-auth-data-access.service'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    ApiCoreFeatureModule,
    ApiCoreDataAccessModule,
    ApiUserDataAccessModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'NXPM_STACK_SECRET6588462',
    }),
  ],
  exports: [ApiAuthDataAccessService],
  providers: [ApiAuthDataAccessService, JwtStrategy],
})
export class ApiAuthDataAccessModule {}
