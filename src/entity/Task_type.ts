import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task_type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task_type: string;

}
