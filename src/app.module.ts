import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import { TaskModule } from './task/task.module';
import { DepartementModule } from './departement/departement.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'salah',  
      password: '123456salah', 
      database: 'employe_task', 
      autoLoadEntities: true,
      synchronize: true, 
    }),
    EmployeeModule,
    TaskModule,
    DepartementModule,
    ProjectModule,
  ],
})
export class AppModule {}
