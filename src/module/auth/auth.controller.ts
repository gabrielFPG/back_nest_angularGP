import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { RegisterAutoDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){
    }

    @Post('register')
    registerUser(@Body()userObj : RegisterAutoDto){
        console.log(userObj);
        return userObj;
    }

    @Post('login')
    login(@Body() credenciales: LoginAuthDto){
        return this.authService.login(credenciales)

    }
}