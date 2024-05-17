import { Module } from '@nestjs/common';
import { dababaseProvider } from './database.providers';
import { ConfigService } from 'src/config/config.service';

@Module({
    providers:[...dababaseProvider, ConfigService],
    exports:[...dababaseProvider]
}) 
export class DatabaseModule {

}
