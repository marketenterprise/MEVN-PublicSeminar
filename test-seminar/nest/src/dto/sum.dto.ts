import { IsArray, IsNumber } from 'class-validator';

export class SumDto {
  @IsArray()
  @IsNumber({}, { each: true })
  numbers: number[];
}
