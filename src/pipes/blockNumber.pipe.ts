import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class BlockNumberPipe implements PipeTransform {
  transform(value: number | string) {
    if (typeof value === 'number') {
      return `0x${value}`;
    } else if (typeof value === 'string') {
      if (!/^[0-9]+$/.test(value)) {
        throw new BadRequestException('Номер блока должен быть числом!');
      }
      return `0x${value}`;
    } else {
      throw new BadRequestException('Номер блока должен быть числом!');
    }
  }
}
