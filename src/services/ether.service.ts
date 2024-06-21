import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EthereumService {
  private provider: ethers.JsonRpcProvider;

  constructor(private configService: ConfigService) {
    this.provider = new ethers.JsonRpcProvider(
      this.configService.get('ETHEREUM_RPC_URL'),
    );
  }

  async getBlockByNumber(blockNumber: string) {
    return this.provider.send('eth_getBlockByNumber', [blockNumber, true]);
  }

  async getTransactionByHash(hash: string) {
    return this.provider.send('eth_getTransactionByHash', [hash]);
  }
}
