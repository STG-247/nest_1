import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticController } from './controller/elastic/elastic.controller';

@Module({
  imports: [],
  controllers: [AppController, ElasticController],
  providers: [AppService],
})
export class AppModule {}
