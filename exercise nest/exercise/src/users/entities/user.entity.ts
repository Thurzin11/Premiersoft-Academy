import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  status: boolean;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
