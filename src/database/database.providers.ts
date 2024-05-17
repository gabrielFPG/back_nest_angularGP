import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm"

export const dababaseProvider= [
    {
        provide: 'DATABASE_CONNECTION',
        inject: [ConfigService],
        userFactory(config: ConfigService)=>{
            const database= new DataSource({
                type:'postgres',
                host: config.get('HOST'),
                port:+config.get('PORT'),
                username: config.get('USERNAME'),
                password: config.get('PASSWORD'),
                database: config.get('DATABSE')
            });
            
            return dataSource.initialize();
        }
    }  
]   