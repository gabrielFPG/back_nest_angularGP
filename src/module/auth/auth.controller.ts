import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAutoDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
    @Post('register')
    registerUser(@Body()userObj : RegisterAutoDto){
        console.log(userObj.email);
        return userObj;
    }

    @Post('login')
    login(@Body() credenciales: LoginAuthDto){
        
    }
}