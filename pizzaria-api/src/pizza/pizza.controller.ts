import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody, ApiQuery
} from "@nestjs/swagger";
import { PizzaService } from './pizza.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { Pizza } from './entities/pizza.entity';

@ApiTags('Pizza')
@Controller('pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova pizza' })
  @ApiResponse({
    status: 201,
    description: 'Pizza criada com sucesso.',
    type: Pizza,
  })
  @ApiBody({ type: CreatePizzaDto })
  async create(
    @Res() res,
    @Body() createPizzaDto: CreatePizzaDto,
  ): Promise<Pizza> {
    const pizza: Pizza = await this.pizzaService.create(createPizzaDto);
    return res.status(201).send(pizza);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as pizzas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de pizzas retornada com sucesso.',
    type: [Pizza],
  })
  async findAll(@Res() res): Promise<Pizza[]> {
    return res.status(200).send(await this.pizzaService.findAll());
  }

  @Get('price')
  @ApiOperation({ summary: 'Buscar pizzas pelo preço' })
  @ApiQuery({
    name: 'price',
    description: 'O preço pelo qual filtrar as pizzas',
    type: Number,
    required: true,
  })
  async getByPrice(@Query('price', ParseIntPipe) price: number) {
    return await this.pizzaService.getByPrice(price);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém uma pizza por ID' })
  @ApiResponse({
    status: 200,
    description: 'Pizza encontrada com sucesso.',
    type: Pizza,
  })
  @ApiResponse({ status: 404, description: 'Pizza não encontrada.' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID da pizza a ser retornada',
  })
  async findOne(@Res() res, @Param('id') id: string): Promise<Pizza> {
    return res.status(200).send(await this.pizzaService.findOne(id));
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma pizza por ID' })
  @ApiResponse({
    status: 200,
    description: 'Pizza atualizada com sucesso.',
    type: Pizza,
  })
  @ApiResponse({ status: 404, description: 'Pizza não encontrada.' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID da pizza a ser atualizada',
  })
  @ApiBody({ type: UpdatePizzaDto })
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePizzaDto: UpdatePizzaDto,
  ) {
    const updatedPizza = await this.pizzaService.update(id, updatePizzaDto);
    return res.status(200).send(updatedPizza);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma pizza por ID' })
  @ApiResponse({ status: 200, description: 'Pizza removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Pizza não encontrada.' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID da pizza a ser removida',
  })
  async remove(@Param('id') id: string) {
    return this.pizzaService.remove(id);
  }
}
