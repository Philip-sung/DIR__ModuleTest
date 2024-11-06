import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { AppController } from './app.controller';

@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    private reflector: Reflector,
  ) {}
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    const host = this.configService.get<string>('HOST');
    this.logger.log(host);
    const additionalText = this.reflector.get<string[]>(
      'additionalText',
      AppController.prototype.getHello,
    );
    return 'Hello World!' + additionalText;
  }
}

