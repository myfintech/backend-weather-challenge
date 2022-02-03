import { Injectable } from '@nestjs/common'

@Injectable()
export class OpenstreetmapService {
  async getCoordinates(location: string) {
    throw Error('not implemented')
  }
}
