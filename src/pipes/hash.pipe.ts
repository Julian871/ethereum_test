import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class HashPipe implements PipeTransform {
  transform(value: string) {
    if (!/^[0-9a-f]{64}$/.test(value)) {
      throw new BadRequestException('Не корректное значение hash');
    } else {
      return `0x${value}`;
    }
  }
}
