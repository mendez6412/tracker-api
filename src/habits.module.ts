import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habit } from './habit.entity';
import { HabitsController } from './habits.controller';
import { HabitsService } from './habits.service';

@Module({
    imports: [TypeOrmModule.forFeature([Habit])],
    providers: [HabitsService],
    controllers: [HabitsController]
})
export class HabitsModule {};