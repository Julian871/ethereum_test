export class TransactionInfo {
  hash: string;
  to: string;
  from: string;
  value: string;
  input: string;
  maxFeePerGas: string;
  maxPriotityFeePerGas: string;
  gasPrice: string;

  constructor(
    hash: string,
    to: string,
    from: string,
    value: string,
    input: string,
    maxFeePerGas: string,
    maxPriotityFeePerGas: string,
    gasPrice: string,
  ) {
    this.hash = hash;
    this.to = to;
    this.from = from;
    this.value = value;
    this.input = input;
    this.maxFeePerGas = maxFeePerGas;
    this.maxPriotityFeePerGas = maxPriotityFeePerGas;
    this.gasPrice = gasPrice;
  }
}
