import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Task } from '../../task/entities/task.entity';
import { Department } from '../../departement/entities/departement.entity';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  cin: string;

  @OneToMany(() => Task, task => task.employee)
  tasks: Task[];

  @ManyToOne(() => Department, department => department.employees, { onDelete: 'SET NULL' })
  department: Department;
}
