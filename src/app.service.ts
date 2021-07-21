import { Injectable } from '@nestjs/common';
import { RequestDto } from './dto/request.dto';
import { ResponseDto } from './dto/response.dto';
import { OwnHttpService } from './http-service/http-service.service';

@Injectable()
export class AppService {
  constructor(private httpService: OwnHttpService,) {}

  public async request(body: RequestDto): Promise<ResponseDto> {
    const response = await this.httpService.post(
      'https://api.shasta.trongrid.io/wallet/triggerconstantcontract',
      {
        owner_address: 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb',
        contract_address: 'TBSo1pthwZJkkXLwfNUC3wzKG2K7wt2Zvg',
        function_selector: 'confirmedTokensForUser(address)',
        parameter: body.parameter,
        visible: true
      },
    );
    return {
      result: '0x' + response.constant_result[0]
    }
  }
}
