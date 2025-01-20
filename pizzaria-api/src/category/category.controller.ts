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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Public } from '../auth/constants/constants';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova categoria' })
  @ApiResponse({
    status: 201,
    description: 'Categoria criada com sucesso.',
    type: Category,
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiBody({ type: CreateCategoryDto })
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
    @Res() res,
  ): Promise<Category> {
    const categoryCreated: Category =
      await this.categoryService.create(createCategoryDto);
    return res.status(201).send(categoryCreated);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as categorias' })
  @ApiResponse({
    status: 200,
    description: 'Lista de categorias.',
    type: [Category],
  })
  async findAll(): Promise<Category[]> {
    return await this.categoryService.findAll();
  }

  @Get('name/:name')
  @ApiOperation({ summary: 'Encontra categoria por nome' })
  async findByName(@Param('name') name: string): Promise<Category[]> {
    return this.categoryService.getByName(name);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém uma categoria por ID' })
  @ApiResponse({
    status: 200,
    description: 'Categoria encontrada.',
    type: Category,
  })
  @ApiResponse({ status: 404, description: 'Categoria não encontrada.' })
  @ApiParam({ name: 'id', description: 'ID da categoria', required: true })
  async findOne(@Param('id') id: string, @Res() res): Promise<Category> {
    const categoryFound: Category = await this.categoryService.findOne(id);
    if (!categoryFound) {
      return res
        .status(404)
        .send({ message: `Category with id ${id} not found` });
    }
    return res.status(200).send(categoryFound);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma categoria por ID' })
  @ApiResponse({
    status: 200,
    description: 'Categoria atualizada com sucesso.',
    type: Category,
  })
  @ApiResponse({ status: 404, description: 'Categoria não encontrada.' })
  @ApiBody({ type: UpdateCategoryDto })
  @ApiParam({ name: 'id', description: 'ID da categoria', required: true })
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma categoria por ID' })
  @ApiResponse({ status: 200, description: 'Categoria removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Categoria não encontrada.' })
  @ApiParam({ name: 'id', description: 'ID da categoria', required: true })
  async remove(@Param('id') id: string, @Res() res) {
    const result = await this.categoryService.remove(id);
    if (!result) {
      return res.status(404).send(false);
    }
    return res.status(200).send(result);
  }
}
