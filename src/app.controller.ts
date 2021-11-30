import { Controller, Get, Query } from '@nestjs/common';
import { WeathergovService } from './weathergov/weathergov.service';
import { OpenstreetmapService } from './openstreetmap/openstreetmap.service';
import { WeatherForecastResponse } from './common/types';

@Controller()
export class AppController {
  constructor(
    private readonly _weatherGovService: WeathergovService,
    private readonly _openStreetMapService: OpenstreetmapService,
  ) {}

  @Get('weather')
  async getWeather(
    @Query('location') location,
  ): Promise<WeatherForecastResponse> {
    return {
      periods: [
        {
          description: null,
          name: null,
          temperature: null,
          windDirection: null,
          windSpeed: null,
        },
      ],
    };
  }
}
