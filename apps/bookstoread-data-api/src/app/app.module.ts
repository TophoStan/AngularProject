import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { DataModule } from './data.module';
require('dotenv');
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://dbUser:dbAdmin123@cluster0.qm2fcyz.mongodb.net/myFirstDatabase`
      // 'mongodb://localhost/nest'
    ),
    DataModule,
    RouterModule.register([
      {
        path: 'data-api',
        module: DataModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
