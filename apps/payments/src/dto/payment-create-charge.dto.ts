import { CreateChargeDto } from '@app/shared';
import { IsEmail } from 'class-validator';

export class PaymentCreateChargeDto extends CreateChargeDto {
  @IsEmail()
  email: string;
}
