import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { HttpServiceModule } from './http-service/http-service.module';

@Module({
  imports: [HttpServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
