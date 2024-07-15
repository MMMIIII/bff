import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HttpModule } from '@nestjs/axios';
import { LoggingModule } from 'src/common/logger';

@Module({
  imports: [HttpModule, LoggingModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
