import { TaskCompleted } from '../entities/task.entity';

export class CreateTaskDto {
  title: string;
  description: string;
  completed?: TaskCompleted; 
  employeeId: number;
}
