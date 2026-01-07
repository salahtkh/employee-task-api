import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Put,
  Delete,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // CREATE
  @Post()
  create(@Body() dto: CreateEmployeeDto) {
    return this.employeeService.create(dto);
  }

  // READ ALL
  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  // READ ONE
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.employeeService.findOne(+id);
  }

  // READ EMPLOYEE TASKS
  @Get(':id/tasks')
  findTasks(@Param('id') id: number) {
    return this.employeeService.findEmployeeTasks(+id);
  }

  // PUT → update كامل
  @Put(':id')
  updatePut(
    @Param('id') id: number,
    @Body() dto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(+id, dto);
  }

  // PATCH → update جزئي
  @Patch(':id')
  updatePatch(
    @Param('id') id: number,
    @Body() dto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(+id, dto);
  }

  // DELETE
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.employeeService.remove(+id);
  }
}

