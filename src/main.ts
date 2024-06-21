import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { AppConfigService } from './libs/config/config.service';
import { HttpExceptionFilter } from './exception-filter/exception-filters';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  const appConfigService = app.get<AppConfigService>(AppConfigService);

  await app.listen(appConfigService.port);
}
void bootstrap();
