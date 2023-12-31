import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './controllers/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    // MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forRoot("mongodb://localhost:27017/hanabi"),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
