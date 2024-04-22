import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  sum(arrNum: number[]): number {
    return arrNum.reduce((a, b) => a + b, 0);
  }
}
