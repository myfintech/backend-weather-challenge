import { Injectable } from '@nestjs/common';

@Injectable()
export class OpenstreetmapService {
  async getCoordinates(_location: string) {}
}
