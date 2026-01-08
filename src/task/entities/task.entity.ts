import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';
import { Project } from '../../project/entities/project.entity';

export enum TaskCompleted {
  TODO = 'todo',
  DOING = 'doing',
  DONE = 'done',
}

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: TaskCompleted,
    default: TaskCompleted.TODO,
  })
  completed: TaskCompleted;

  @ManyToOne(() => Employee, employee => employee.tasks, { onDelete: 'CASCADE' })
  employee: Employee;

  @ManyToOne(() => Project, project => project.tasks, { onDelete: 'CASCADE' })
  project: Project;
}
