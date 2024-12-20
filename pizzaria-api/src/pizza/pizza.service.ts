import { Injectable } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';
import { Between, MoreThan, Repository } from 'typeorm';

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(Pizza)
    private pizzaRepository: Repository<Pizza>,
  ) {}

  async getByPrice(lessPrice: number, morePrice: number): Promise<Pizza[]> {
    return await this.pizzaRepository.find({
      where: {
        price: Between(lessPrice, morePrice),
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

  async update(id: string, updatePizzaDto: UpdatePizzaDto) {
    return await this.pizzaRepository.update(id, updatePizzaDto);
  }

  async remove(id: string): Promise<boolean> {
    const isDeleted = await this.pizzaRepository.delete(id);
    return isDeleted.affected !== 0;
  }
}
