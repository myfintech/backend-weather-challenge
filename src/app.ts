import * as express from 'express'
import type { Request, Response } from 'express'

import * as WeatherGovService from './weathergov.service'
import * as OpenstreetmapService from './openstreetmap.service'

const app = express()

app.get('/weather', async (req: Request, res: Response) => {
  const { location } = req.query
  const { latitude, longitude } = await OpenstreetmapService.getCoordinates(
    location as any,
  )

  throw Error('not implemented')
})

export default app
