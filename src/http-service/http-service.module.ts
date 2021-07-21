import { HttpModule, Module } from '@nestjs/common';
import { OwnHttpService } from './http-service.service';

@Module({
  imports: [HttpModule],
  providers: [OwnHttpService],
  exports: [OwnHttpService],
})
export class HttpServiceModule {
}
