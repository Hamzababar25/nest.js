import { Controller, Get,HttpException,HttpStatus,Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
getHello(): any {
  throw new Error('Method not implemented.');
}
 

  // @Get()
  // getHello(): any {

  //   return {name:'hamza',mail:'hamza@gmail.com'}
  // }

@Post()
Store():any{
      return " store data in database";
}
@Get()
async findAll() {
  throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
}

}
