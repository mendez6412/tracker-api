import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { Habit } from "./habit.entity";
import { CreateHabitDto, HabitsService } from "./habits.service";

@Controller('habits')
export class HabitsController {
    constructor(private readonly habitsService: HabitsService) {}

    @Post()
    create(@Body() createHabitDto: CreateHabitDto): Promise<Habit> {
        return this.habitsService.create(createHabitDto);
    }

    @Patch(':id')
    increment(@Param('id') id: number): Promise<Habit> {
        return this.habitsService.incrementHabitCount(id);
    }

    @Get()
    findAll(): Promise<Habit[]> {
        return this.habitsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Habit> {
        return this.habitsService.findOne(id);
    }
}