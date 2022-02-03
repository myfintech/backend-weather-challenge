import { Injectable } from '@nestjs/common'

@Injectable()
export class WeathergovService {
  async getForecast(latitude: string, longitude: string) {
    throw Error('not implemented')
  }

  private async getPoint(latitude: string, longitude: string) {
    throw Error('not implemented')
  }
}
