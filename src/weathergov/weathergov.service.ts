import { Injectable } from '@nestjs/common'

@Injectable()
export class WeathergovService {
  async getForecast(_latitude: string, _longitude: string) {
    throw Error('not implemented')
  }

  async getPoint(_latitude: string, _longitude: string) {
    throw Error('not implemented')
  }
}
