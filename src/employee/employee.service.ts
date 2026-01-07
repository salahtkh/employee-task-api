import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
  ) {}

  create(dto: CreateEmployeeDto) {
    return this.employeeRepo.save(dto);
  }

  findAll() {
    return this.employeeRepo.find();
  }

  findOne(id: number) {
    return this.employeeRepo.findOneBy({ id });
  }

  findEmployeeTasks(id: number) {
    return this.employeeRepo.findOne({
      where: { id },
      relations: ['tasks'],
    });
  }

  

  update(id: number, dto: UpdateEmployeeDto) {
    return this.employeeRepo.update(id, dto);
  }

  remove(id: number) {
    return this.employeeRepo.delete(id);
  }
}

