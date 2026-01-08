// src/project/project.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}

  // CREATE
  create(dto: CreateProjectDto) {
    const project = this.projectRepo.create(dto);
    return this.projectRepo.save(project);
  }

  // GET ALL (with tasks)
  findAll() {
    return this.projectRepo.find({
      relations: ['tasks'],
    });
  }

  // GET ONE
  async findOne(id: number) {
    const project = await this.projectRepo.findOne({
      where: { id },
      relations: ['tasks'],
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return project;
  }

  // UPDATE
  async update(id: number, dto: UpdateProjectDto) {
    const project = await this.findOne(id);
    Object.assign(project, dto);
    return this.projectRepo.save(project);
  }

  // DELETE
  async remove(id: number) {
    const project = await this.findOne(id);
    return this.projectRepo.remove(project);
  }
}
