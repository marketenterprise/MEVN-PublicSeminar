import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    service = new AppService();
  });

  it('should sum an array of numbers', () => {
    const arrNum = [1, 2, 3, 4, 5];
    expect(service.sum(arrNum)).toBe(15);
  });

  it('should return 0 for an empty array', () => {
    const arrNum: number[] = [];
    expect(service.sum(arrNum)).toBe(0);
  });

  it('should handle negative numbers', () => {
    const arrNum = [-1, -2, 3, 4];
    expect(service.sum(arrNum)).toBe(4);
  });
});
