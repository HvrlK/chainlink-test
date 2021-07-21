import { AppService } from './app.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ResponseDto } from './dto/response.dto';
import { RequestDto } from './dto/request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  async request(@Body() body: RequestDto): Promise<ResponseDto> {
    return this.appService.request(body);
  }
}
