import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
      }),
    }),
    ProductsModule,
    OrdersModule,
    UsersModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
