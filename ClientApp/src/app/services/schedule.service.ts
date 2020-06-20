import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Schedule } from '../models/Schedule';

@Injectable({
    providedIn: 'root'
})

export class ScheduleService {
    private readonly endpoint = '/api/schedules/';

    constructor(private http: HttpClient) { }

    getSchedules(date: string) {
        return this.http.get<Schedule[]>(this.endpoint + '?date=' + date);
    }

    updateSchedule(schedule: Schedule){
        return this.http.put(this.endpoint, schedule);
    }
}
