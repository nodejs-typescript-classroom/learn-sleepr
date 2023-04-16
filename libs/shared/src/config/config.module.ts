import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule as NestCofigModule } from '@nestjs/config';
import * as Joi from 'joi';
@Module({
  imports: [
    NestCofigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGO_URL: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
