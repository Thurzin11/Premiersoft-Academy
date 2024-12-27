import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category: Category =
      this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(category);
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async findOne(id: string): Promise<Category> {
    return await this.categoryRepository.findOne({
      where: { id },
    });
  }

  async getByName(name: string): Promise<Category> {
    return await this.categoryRepository.findOne({ where: { name } });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const response = await this.categoryRepository.update(
      id,
      updateCategoryDto,
    );
    console.log(response);
    return response;
  }

  async remove(id: string): Promise<boolean> {
    const isDeleted = await this.categoryRepository.delete(id);
    return isDeleted.affected !== 0;
  }
}
