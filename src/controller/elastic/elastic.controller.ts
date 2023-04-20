import { Body, Controller, Post } from '@nestjs/common';

@Controller('api/elastic')
export class ElasticController {

    @Post("/user")
    searchUser(@Body('payload') reqBody: any): string{
        console.log(reqBody.city);








        
        return reqBody;
    }

}
