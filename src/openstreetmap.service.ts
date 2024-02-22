import axios from 'axios'
import { GeoCoordinates } from './common/types'

const httpClient = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org',
})

export async function getCoordinates(
  location: string,
): Promise<GeoCoordinates> {
  const response = await httpClient.get('/search', {
    params: { q: location, format: 'json' },
  })

  if (!response.data) {
    return undefined
  }

  return {
    latitude: response.data[0]?.lat,
    longitude: response.data[0]?.lon,
  }
}
