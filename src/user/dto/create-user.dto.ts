import { IsEmail, IsIn, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";
import { constant } from "../../constants";
import { Match } from "../../validations/match.validation";
import { UniqueOnDatabase } from "../../validations/unique.validation";
import { User } from "../entities/user.entity";

enum ROLES {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export class CreateUserDto {
  @MaxLength(200)
  @IsNotEmpty()
  name: string

  @IsEmail()
  @MaxLength(200)
  @IsNotEmpty()
  @UniqueOnDatabase(User)
  email: string

  @MaxLength(20)
  @IsNotEmpty()
  role: string

  @Matches(constant.PASSWORD_REGEX)
  @MaxLength(50)
  @MinLength(8)
  @IsNotEmpty()
  password: string

  @Matches(constant.PASSWORD_REGEX)
  @MaxLength(50)
  @MinLength(8)
  @IsNotEmpty()
  @Match('password')
  passwordConfirmation: string
}
