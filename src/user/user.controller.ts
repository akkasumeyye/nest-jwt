import { JwtGuard } from './../auth/guard/jwt.guard';
import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from './../auth/decorator';

@Controller('users')
export class UserController {
    @UseGuards(JwtGuard)
    @Get('me')
    getMe(@GetUser() user : User) {
        return user;
    }

    @Patch()
    editUser(){}
}
