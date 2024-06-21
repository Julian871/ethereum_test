export class BlockInfo {
  height: string;
  hash: string;
  parentHash: string;
  gasLimit: string;
  gasUsed: string;
  size: string;

  constructor(
    height: string,
    hash: string,
    parentHash: string,
    gasLimit: string,
    gasUsed: string,
    size: string,
  ) {
    this.height = height;
    this.hash = hash;
    this.parentHash = parentHash;
    this.gasLimit = gasLimit;
    this.gasUsed = gasUsed;
    this.size = size;
  }
}
