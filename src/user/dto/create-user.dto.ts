import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";
import { constant } from "src/constants";

export class CreateUserDto {
  @MaxLength(200)
  @IsNotEmpty()
  name: string

  @IsEmail()
  @MaxLength(200)
  @IsNotEmpty()
  email: string

  @Matches(constant.PASSWORD_REGEX)
  @MaxLength(50)
  @MinLength(8)
  @IsNotEmpty()
  password: string

  @Matches(constant.PASSWORD_REGEX)
  @MaxLength(50)
  @MinLength(8)
  @IsNotEmpty()
  passwordConfirmation: string
}
