import { Payload } from './../../model/payload/payload';
import { ReqBody } from './../../model/req-body/req-body';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('api/elastic')
export class ElasticController {

    @Post("/user")
    searchUser(@Body() reqBody: ReqBody): Payload{
        console.log(reqBody.payload.city);








        
        return reqBody.payload;
    }

}
