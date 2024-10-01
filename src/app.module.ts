import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [UsersModule, BooksModule,
    ConfigModule.forRoot({
      envFilePath: './configuration/.local.env',
      isGlobal: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     type: "postgres",
    //     host: configService.get('DB_HOST'),
    //     port: +configService.get('DB_PORT'),
    //     username: configService.get('DB_USERNAME'),
    //     password: configService.get('DB_PASSWORD'),
    //     database: configService.get('DB_NAME'),
    //     // entities: [],
    //     autoLoadEntities: true,
    //     synchronize: configService.get('synchronize'),
    //   }),
    //   inject: [ConfigService],
    // }),

    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "faizan",
      password: "1234",
      database: "BookReader",
      // entities: [__dirname + '/**/*.entity.{js,ts}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
