import { Injectable } from "@nestjs/common";
import { createClient } from "redis";
import { readFile } from 'fs/promises';

@Injectable()
export class RedisService{

    private client;

    constructor(){
        this.initRedisClient();
    }
    
    private async initRedisClient(){
        this.client = createClient({
            url: "redis://default:redispw@localhost:32769",
        });
        this.client.on('error', err => console.log('Redis Client Error', err));
        await this.client.connect();
    } 
    

    
    getSimpleValue(key: string): any {

    }

    async getObjectValue(key: string): Promise<any> {
        return await this.client.hGetAll(key);
    }
    

    async disconnectRedisClient(){
        await this.client.disconnect()
    }
    
}