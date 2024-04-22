import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SumDto } from './dto/sum.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/sum')
  sumCalculator(@Body() body: SumDto): number {
    return this.appService.sum(body.numbers);
  }
}
