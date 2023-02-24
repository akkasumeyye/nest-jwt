import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthService } from './auth.service';
import { AuthContoller } from './auth.controller';
import { Module } from "@nestjs/common";
import { JwtModule } from '@nestjs/jwt';

@Module ({
    imports : [JwtModule.register({})],
    controllers: [AuthContoller],
    providers: [AuthService , JwtStrategy],
})
export class AuthModule {}