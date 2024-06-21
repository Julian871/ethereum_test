import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './config.interface';

@Injectable()
export class AppConfigService {
  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {}

  get port(): number {
    return this.configService.get('LOCAL_PORT', { infer: true }) ?? 7777;
  }
}
