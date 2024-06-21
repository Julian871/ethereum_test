import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { EthereumService } from './services/ether.service';
import { AppConfigModule } from './libs/config/config.module';
import { MainService } from './services/main.service';

@Module({
  imports: [AppConfigModule],
  controllers: [MainController],
  providers: [EthereumService, MainService],
})
export class MainModule {}
