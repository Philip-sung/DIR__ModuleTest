import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
export declare class AppService {
    private configService;
    private reflector;
    constructor(configService: ConfigService, reflector: Reflector);
    private readonly logger;
    getHello(): string;
}
