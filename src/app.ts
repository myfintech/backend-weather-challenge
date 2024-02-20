import * as express from 'express'
import type { Request, Response } from 'express'

import { WeathergovService } from './weathergov/weathergov.service'
import { OpenstreetmapService } from './openstreetmap/openstreetmap.service'

const app = express()

const weatherGovService = new WeathergovService()
const openStreetMapService = new OpenstreetmapService()

app.get('/weather', async (req: Request, res: Response) => {
  const { location } = req.query
  const { latitude, longitude } = await openStreetMapService.getCoordinates(
    String(location),
  )

  return res.status(500).send('not implemented')
})

export default app
