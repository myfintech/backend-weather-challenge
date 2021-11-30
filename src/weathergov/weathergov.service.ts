import { Injectable } from '@nestjs/common';

@Injectable()
export class WeathergovService {
  async getForecast(_latitude: string, _longitude: string) {}

  async getPoint(_latitude: string, _longitude: string) {}
}
