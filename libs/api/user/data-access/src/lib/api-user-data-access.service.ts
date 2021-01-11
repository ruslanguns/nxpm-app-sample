import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, getGravatarUrl, hashPassword } from '@app-core/api/core/data-access'
import { Role, UserCreateInput } from '@prisma/client'

@Injectable()
export class ApiUserDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async findUserById(userId: string) {
    return await this.data.user.findUnique({
      where: { id: userId },
      include: { posts: { include: { categories: { include: { category: true, post: true } }, author: true } } },
    })
  }

  async createUser(input: Partial<UserCreateInput>) {
    const password = input.password
    const hashedPassword = hashPassword(password)
    const email = input.email.trim()
    const username = input.username || email

    return this.data.user.create({
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        email,
        phone: input.phone,
        username,
        avatarUrl: input.avatarUrl || getGravatarUrl(input.email.toLowerCase()),
        password: hashedPassword,
        role: Role.User,
      },
    })
  }

  async findUserByEmail(email: string) {
    return await this.data.user.findUnique({
      where: { email },
      include: { posts: { include: { categories: { include: { category: true, post: true } }, author: true } } },
    })
  }

  async findUserByUsername(username: string) {
    return await this.data.user.findUnique({
      where: { username },
      include: { posts: { include: { categories: { include: { category: true, post: true } }, author: true } } },
    })
  }
}
