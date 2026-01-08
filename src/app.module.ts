// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// import { EmployeeModule } from './employee/employee.module';
// import { TaskModule } from './task/task.module';
// import { ProjectModule } from './project/project.module';
// import { DepartementModule } from './departement/departement.module';

// @Module({
//   imports: [
//     // 🔹 تحميل .env
//     ConfigModule.forRoot({
//       isGlobal: true,
//       envFilePath: '.env',
//     }),

//     // 🔹 DEBUG: شوف واش .env تقرا
//     (() => {
//       console.log('📦 DATABASE CONFIG FROM .ENV');
//       console.log({
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         user: process.env.DB_USERNAME,
//         pass: process.env.DB_PASSWORD,
//         db: process.env.DB_NAME,
//         sync: process.env.DB_SYNCHRONIZE,
//       });
//       return TypeOrmModule.forRoot({
//         type: 'postgres',
//         host: process.env.DB_HOST,
//         port: Number(process.env.DB_PORT),
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//         autoLoadEntities: true,
//         synchronize: process.env.DB_SYNCHRONIZE === 'true',
//       });
//     })(),

//     EmployeeModule,
//     TaskModule,
//     ProjectModule,
//     DepartementModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}




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
