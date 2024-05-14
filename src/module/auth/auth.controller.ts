import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAutoDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){
    }

    @Post('register')
    registerUser(@Body()userObj : RegisterAutoDto){
        console.log(userObj.email);
        return userObj;
    }

    @Post('login')
    login(@Body() credenciales: LoginAuthDto){

    }
}