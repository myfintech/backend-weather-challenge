import * as request from 'supertest'
import app from '../src/app'

describe('app (e2e)', () => {
  jest.setTimeout(1_000)

  describe('/weather (GET)', () => {
    it('with no query', async () => {
      const response = await request(app).get('/weather')

      expect(response.statusCode).toEqual(400)
    })

    it('with location="new york"', async () => {
      const response = await request(app)
        .get('/weather')
        .query({ location: 'new york' })

      expect(response.statusCode).toEqual(200)

      expect(response.body.periods).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            temperature: expect.any(String),
            windSpeed: expect.any(String),
            windDirection: expect.any(String),
          }),
        ]),
      )
    })
  })
})
