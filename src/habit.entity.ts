import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Habit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'date' })
    date: string;

    @UpdateDateColumn()
    lastUpdatedOn: Date;

    @Column()
    count: number;
}