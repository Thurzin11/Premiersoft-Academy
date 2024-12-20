import { Module } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { PizzaController } from './pizza.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pizza])],
  controllers: [PizzaController],
  providers: [PizzaService],
})
export class PizzaModule {}
