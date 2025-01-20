import { Injectable } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';
import { ILike, Repository } from 'typeorm';

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

  async getByName(name: string): Promise<Pizza[]> {
    const nameRight = `%${name}%`;
    return await this.pizzaRepository.find({
      where: { name: ILike(nameRight) },
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
      .innerJoin('pizza_category', 'pc', 'pc.pizza_id = p.id')
      .innerJoin('category', 'c', 'pc.category_id = c.id')
      .where('c.id = :categoryId', { categoryId })
      .select('p')
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
