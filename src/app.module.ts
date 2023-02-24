import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule , ConfigModule.forRoot({isGlobal : true})],
  controllers: [UserController],
})
export class AppModule {}
