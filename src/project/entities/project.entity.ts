// src/project/entities/project.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from '../../task/entities/task.entity';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date' })
  date_Debut: string;

  @Column({ type: 'date' })
  date_Fin: string;

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];
}

