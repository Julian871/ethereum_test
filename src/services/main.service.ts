import { Injectable, NotFoundException } from '@nestjs/common';
import { BlockInfo } from '../models/block_view.model';
import { EthereumService } from './ether.service';
import { TransactionInfo } from '../models/transaction_view.model';

@Injectable()
export class MainService {
  constructor(private readonly ethereumService: EthereumService) {}

  async getBlockByNumber(blockNumber: string): Promise<BlockInfo> {
    try {
      const block = await this.ethereumService.getBlockByNumber(blockNumber);

      if (!block) throw new NotFoundException('Блок не найден!');

      return new BlockInfo(
        blockNumber,
        block.hash,
        block.parentHash,
        block.gasLimit,
        block.gasUsed,
        block.size,
      );
    } catch (error) {
      throw error;
    }
  }

  async getTransactionByHash(hash: string): Promise<TransactionInfo> {
    try {
      const transaction = await this.ethereumService.getTransactionByHash(hash);

      if (!transaction) throw new NotFoundException('Транзакция не найдена!');

      return new TransactionInfo(
        transaction.hash,
        transaction.to,
        transaction.from,
        transaction.value,
        transaction.input,
        transaction.maxFeePerGas,
        transaction.maxPriotityFeePerGas,
        transaction.gasPrice,
      );
    } catch (error) {
      throw error;
    }
  }
}
