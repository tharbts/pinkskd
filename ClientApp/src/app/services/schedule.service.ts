import { Schedule } from './../models/Schedule';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ScheduleService {
    private readonly endpoint = '/api/schedules/';
    private scheduleSource = new BehaviorSubject<Schedule>(new Schedule());
    public currentSchedule = this.scheduleSource.asObservable();

    constructor(private http: HttpClient) {
        this.getSchedules().subscribe(schedules => {
            this.scheduleSource.next(schedules[0]);
        });
    }

    getSchedules(filter?: any) {
        var endpoint = filter ? this.endpoint + '?' + this.toQueryString(filter) : this.endpoint;
        return this.http.get<Schedule[]>(endpoint);
    }

    createSchedule(schedule: Schedule) {
        return this.http.post<Schedule>(this.endpoint, schedule);
    }

    updateSchedule(schedule: Schedule) {
        return this.http.put<Schedule>(this.endpoint, schedule);
    }

    toQueryString(obj) {
        var parts = [];

        for (var property in obj) {
            var value = obj[property];
            if (value != null && value != undefined)
                parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
        }

        return parts.join('&');
    }
}
