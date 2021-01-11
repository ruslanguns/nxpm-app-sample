import { InputType, PickType } from '@nestjs/graphql'
import { UserInput } from '@app-core/api/user/data-access'

@InputType()
export class RegisterInput extends PickType(UserInput, [
  'email',
  'username',
  'password',
  'firstName',
  'lastName',
  'phone',
] as const) {}
