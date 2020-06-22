import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LinkedinComponent } from './linkedin';

@Module({
  controllers: [AuthController],
  components: [LinkedinComponent]
})
export class AuthModule {}
