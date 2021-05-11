import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Habit } from "./habit.entity";

export interface CreateHabitDto {
    name: string;
    date: string;
}

@Injectable()
export class HabitsService {
    constructor(
        @InjectRepository(Habit)
        private habitsRepository: Repository<Habit>,
    ) {}

    create(createHabitDto: CreateHabitDto): Promise<Habit> {
        const habit = new Habit();
        habit.name = createHabitDto.name;
        habit.date = createHabitDto.date;
        habit.count = 1;

        return this.habitsRepository.save(habit);
    }

    async incrementHabitCount(id: number): Promise<Habit> {
        const habit = await this.findOne(id);
        habit.count = habit.count + 1;

        return this.habitsRepository.save(habit);
    }

    findAll(): Promise<Habit[]> {
        return this.habitsRepository.find();
    }

    findOne(id: number): Promise<Habit> {
        return this.habitsRepository.findOne(id);
    }
}