import { Time } from './Time';

export interface Schedule {
    id: number;
    date: Date;
    times: Time[]
}