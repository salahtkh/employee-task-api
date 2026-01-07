import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task, TaskCompleted } from './entities/task.entity';
import { Employee } from '../employee/entities/employee.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,

    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>,
  ) {}

  // Create a new task
  async create(dto: CreateTaskDto) {
    const employee = await this.employeeRepo.findOne({
      where: { id: dto.employeeId },
    });

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    const task = this.taskRepo.create({
      title: dto.title,
      description: dto.description,
      completed: dto.completed ?? TaskCompleted.TODO, // default to TODO
      employee: employee,
    });

    return this.taskRepo.save(task);
  }

  // Get all tasks with their employees
  findAll() {
    return this.taskRepo.find({
      relations: ['employee'],
    });
  }

  // Get a single task by id
  async findOne(id: number) {
    const task = await this.taskRepo.findOne({
      where: { id },
      relations: ['employee'],
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  // Update task (PUT/PATCH)
  async update(id: number, dto: UpdateTaskDto) {
    const task = await this.findOne(id);

    if (dto.completed && !Object.values(TaskCompleted).includes(dto.completed)) {
      throw new NotFoundException('Invalid status');
    }

    Object.assign(task, dto); // merge DTO into entity

    return this.taskRepo.save(task);
  }

  // Remove task
  async remove(id: number) {
    const task = await this.findOne(id);
    return this.taskRepo.remove(task);
  }

  // Optional: get tasks of an employee
  async findByEmployee(employeeId: number) {
    const employee = await this.employeeRepo.findOne({
      where: { id: employeeId },
      relations: ['tasks'],
    });

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    return employee.tasks;
  }
}
