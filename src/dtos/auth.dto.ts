import { ApiProperty } from '@nestjs/swagger';

export class IUserLoginDTO {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
