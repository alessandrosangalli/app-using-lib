import { Module } from '@nestjs/common';
import { LoggerModule } from 'lib-with-cls';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [LoggerModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
