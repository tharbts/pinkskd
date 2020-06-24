import { ISchedule } from './../interfaces/ISchedule';
import { Time } from './Time';

export class Schedule implements ISchedule {
    id: number;
    date: Date = new Date();
    times: Time[] = [];
}