import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
    imports:[
        JwtModule.register({
            secret: "MI CODIGO SECRETO",
            signOptions:{expiresIn: 150}

        })
    ],

    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule {}