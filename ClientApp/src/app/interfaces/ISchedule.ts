import { ITime } from './ITime';

export interface ISchedule {
    id: number;
    date: Date;
    times: ITime[]
}