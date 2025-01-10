import { Injectable } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(Pizza)
    private pizzaRepository: Repository<Pizza>,
  ) {}

  async getByPrice(price: number): Promise<Pizza[]> {
    return await this.pizzaRepository.find({
      where: {
        price,
      },
    });
  }

  async create(createPizzaDto: CreatePizzaDto): Promise<Pizza> {
    const pizza = this.pizzaRepository.create(createPizzaDto);
    return await this.pizzaRepository.save(pizza);
  }

  async findAll(): Promise<Pizza[]> {
    return await this.pizzaRepository.find();
  }

  async findOne(id: string): Promise<Pizza> {
    return await this.pizzaRepository.findOne({ where: { id } });
  }

  async findByCategory(categoryId: string): Promise<Pizza[]> {
    return await this.pizzaRepository
      .createQueryBuilder('p')
      .innerJoin('pizza_category', 'pc', 'pc.pizza_id = p.id') // Join the pivot table
      .innerJoin('category', 'c', 'pc.category_id = c.id') // Join the category table
      .where('c.id = :categoryId', { categoryId }) // Add the WHERE condition
      .select('p') // Select only fields from the pizza table
      .getMany();
  }

  async update(id: string, updatePizzaDto: UpdatePizzaDto) {
    return await this.pizzaRepository.update(id, updatePizzaDto);
  }

  async getByAvailable(): Promise<Pizza[]> {
    return await this.pizzaRepository.find({ where: { isAvailable: true } });
  }

  async remove(id: string): Promise<boolean> {
    const isDeleted = await this.pizzaRepository.delete(id);
    return isDeleted.affected !== 0;
  }
}
