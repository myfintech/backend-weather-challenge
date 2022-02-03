import { Controller, Get, HttpCode, Query } from '@nestjs/common'
import { WeathergovService } from './weathergov/weathergov.service'
import { OpenstreetmapService } from './openstreetmap/openstreetmap.service'
import { WeatherForecastResponse } from './common/types'

@Controller()
export class AppController {
  constructor(
    private readonly weatherGovService: WeathergovService,
    private readonly openStreetMapService: OpenstreetmapService,
  ) {}

  @Get('weather')
  async getWeather(
    @Query('location') location: string,
  ): Promise<WeatherForecastResponse> {
    throw Error('not implemented')
  }
}
