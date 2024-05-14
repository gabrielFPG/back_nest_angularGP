import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAutoDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
    @Post('register')
    registerUser(@Body()userObj : RegisterAutoDto){
        userObj.email

    }
}