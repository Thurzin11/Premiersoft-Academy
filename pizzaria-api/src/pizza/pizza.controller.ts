import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { Pizza } from './entities/pizza.entity';

@Controller('pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Post()
  async create(
    @Res() res,
    @Body() createPizzaDto: CreatePizzaDto,
  ): Promise<Pizza> {
    const pizza: Pizza = await this.pizzaService.create(createPizzaDto);
    return res.status(201).send(pizza);
  }

  @Get()
  async findAll(@Res() res): Promise<Pizza[]> {
    return res.status(201).send(await this.pizzaService.findAll());
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string): Promise<Pizza> {
    return res.status(201).send(await this.pizzaService.findOne(id));
  }

  @Patch(':id')
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePizzaDto: UpdatePizzaDto,
  ) {
    return await this.pizzaService.update(id, updatePizzaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzaService.remove(id);
  }
}
