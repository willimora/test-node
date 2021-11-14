import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  price: number;
}
