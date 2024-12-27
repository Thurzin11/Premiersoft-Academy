import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  MinLength,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Category } from '../../category/entities/category.entity';
import { Type } from 'class-transformer';

export class CreatePizzaDto {
  @ApiProperty({ example: 'Margherita' })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({ example: 'Molho de tomate, mussarela, manjericão' })
  @IsString()
  @MinLength(10)
  description: string;

  @ApiProperty({ example: 45.9 })
  @IsNumber()
  price: number;

  @ApiProperty({ example: true, required: false })
  @IsBoolean()
  @IsOptional()
  isAvailable?: boolean;

  @ApiProperty({
    example: [
      {
        id: 'f5262afb-ebb6-4dbb-9f0c-91a38071cb92',
        name: 'Doce',
        description:
          'Deliciosas pizzas doces, perfeitas para sobremesas, com coberturas de chocolates, frutas e outras combinações irresistíveis.',
        createdAt: '2024-12-18T14:33:04.650Z',
        updatedAt: '2024-12-18T14:33:04.650Z',
      },
      {
        id: '1d40183d-3cfe-45b1-8453-c3b224381b1d',
        name: 'Vegetariana',
        description:
          'Opções de pizzas vegetarianas feitas com legumes, vegetais frescos e ingredientes de alta qualidade para uma refeição saudável e saborosa.',
        createdAt: '2024-12-18T14:33:14.033Z',
        updatedAt: '2024-12-18T14:33:14.033Z',
      },
    ],
    required: false,
    description:
      'Lista de categorias associadas à pizza, passando os objetos completos',
  })
  @IsArray()
  @Type(() => Category)
  categories: Category[];
}
