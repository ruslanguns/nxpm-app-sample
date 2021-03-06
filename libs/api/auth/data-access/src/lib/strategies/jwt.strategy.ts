import { cookieExtractor } from '@app-core/api/core/data-access'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-jwt'
import { ApiAuthDataAccessService } from '../api-auth-data-access.service'
import { JwtDto } from '../dto/jwt.dto'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly auth: ApiAuthDataAccessService) {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: 'NXPM_STACK_SECRET6588462',
    })
  }

  async validate(payload: JwtDto) {
    const user = await this.auth.validateUser(payload.userId)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
