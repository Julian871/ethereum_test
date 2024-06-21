import { Controller, Get, Param, UsePipes } from '@nestjs/common';
import { BlockNumberPipe } from './pipes/blockNumber.pipe';
import { BlockInfo } from './models/block_view.model';
import { TransactionInfo } from './models/transaction_view.model';
import { HashPipe } from './pipes/hash.pipe';
import { MainService } from './services/main.service';

@Controller()
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @UsePipes(BlockNumberPipe)
  @Get('/block/:height')
  getBlockByNumber(@Param('height') blockNumber: string): Promise<BlockInfo> {
    return this.mainService.getBlockByNumber(blockNumber);
  }

  @UsePipes(HashPipe)
  @Get('/transactions/:hash')
  getTransactionByHash(@Param('hash') hash: string): Promise<TransactionInfo> {
    return this.mainService.getTransactionByHash(hash);
  }
}
