import { Injectable } from '@nestjs/common';
import { CatSchema } from './cat.schema';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
