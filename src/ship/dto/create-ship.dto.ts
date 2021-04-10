import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateShipDto {
  @MaxLength(200)
  @IsNotEmpty()
  name: string
}
