import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { validatePassword } from '@app-core/api/core/data-access'
import { ApiUserDataAccessService } from '@app-core/api/user/data-access'
import { ApiCoreFeatureService } from '@app-core/api/core/feature'
import { Response } from 'express'
import { LoginInput } from './dto/login.input'
import { RegisterInput } from './dto/register.input'
import { UserToken } from './models/user-token.model'

@Injectable()
export class ApiAuthDataAccessService {
  constructor(
    private readonly core: ApiCoreFeatureService,
    private readonly data: ApiUserDataAccessService,
    private readonly jwtService: JwtService,
  ) {}

  async register(payload: RegisterInput) {
    const user = await this.data.createUser({
      ...payload,
    })

    return this.signUser(user)
  }

  async login(input: LoginInput) {
    const email = input.email.trim()
    const password = input.password.trim()
    const user = await this.data.findUserByEmail(email)

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`)
    }

    const passwordValid = validatePassword(password, user.password)

    if (!passwordValid) {
      throw new BadRequestException('Invalid password')
    }

    return this.signUser(user)
  }

  signUser(user): UserToken {
    const token = this.jwtService.sign({ userId: user?.id })
    return { token, user }
  }

  validateUser(userId: string) {
    return this.data.findUserById(userId)
  }

  getUserFromToken(token: string) {
    const userId = this.jwtService.decode(token)['userId']

    return this.data.findUserById(userId)
  }

  setCookie(res: Response, token: string) {
    return res?.cookie(this.core.cookie.name, token, this.core.cookie.options)
  }

  public clearCookie(res: Response) {
    return res.clearCookie(this.core.cookie.name, this.core.cookie.options)
  }
}
