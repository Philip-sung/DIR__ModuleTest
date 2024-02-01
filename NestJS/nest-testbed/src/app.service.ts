import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    const host = this.configService.get<string>('HOST');
    this.logger.log(host);
    return 'Hello World!';
  }
}
