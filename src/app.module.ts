import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger.middleware';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [AppController,UserController],
 
  providers: [AppService],
})
export  class AppModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '', method: RequestMethod.POST },
      { path: '', method: RequestMethod.GET});
  }
}
