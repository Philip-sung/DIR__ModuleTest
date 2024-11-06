import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AdditionalText } from './decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @AdditionalText('testA', 'textA')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

