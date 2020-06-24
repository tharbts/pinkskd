import { ITime } from './../interfaces/ITime';

export class Time implements ITime {
    id: number;
    start: string;
    end: string;
    note: string;
}