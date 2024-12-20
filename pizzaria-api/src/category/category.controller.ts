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
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
    @Res() res,
  ): Promise<Category> {
    const categoryCreated: Category =
      await this.categoryService.create(createCategoryDto);
    return res.status(201).send(categoryCreated);
  }

  @Get()
  async findAll(): Promise<Category[]> {
    return await this.categoryService.findAll();
  }

  @Get(':id')
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
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res) {
    const result = await this.categoryService.remove(id);
    if (!result) {
      return res.status(404).send(false);
    }
    return res.status(200).send(result);
  }
}
