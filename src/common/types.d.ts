export interface WeatherForecastResponse {
  periods: Array<WeatherPeriod>
}

export type WeatherPeriod = {
  name: string
  temperature: string
  windSpeed: string
  windDirection: string
}
