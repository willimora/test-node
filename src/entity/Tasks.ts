import { Products } from './Products';
import { Task_type } from './Task_type';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(()=>Task_type, (type) =>type.id, {eager:true})
  task_type: Task_type;

  @ManyToOne(()=>Products, (prod) =>prod.id, {eager:true})
  product: Products;

  @Column()
  task_title: string;

  @Column()
  datetime: Date;

  @Column({default:null})
  deleted_at: Date;
}
