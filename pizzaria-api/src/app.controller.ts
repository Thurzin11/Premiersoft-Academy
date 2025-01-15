import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as process from 'node:process';
import { Public } from './auth/constants/constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return String(process.env.NODE_ENV);
  }
}
