import { Time } from './../../models/Time';
import { ScheduleService } from '../../services/schedule.service';
import { TimeComponentService } from '../../services/time-component.service';
import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Schedule } from 'src/app/models/Schedule';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
    public schedule:Schedule;
    public time: string;
    public started: boolean = false;

    constructor(private timeComponentService: TimeComponentService, private scheduleService: ScheduleService) {
        timeComponentService.currentTime.subscribe(time => this.time = time);
        scheduleService.currentSchedule.subscribe(schedule => {
            this.schedule = schedule ? schedule : new Schedule();
            this.getStarted();
        });
    }

    ngOnInit(): void {

    }

    onClick(){
        this.addTime();
    }

    addTime(){
        this.started ? this.stopTime() : this.startTime();

        var result$;

        if(this.schedule.id)
            result$ = this.scheduleService.updateSchedule(this.schedule);
        else
            result$ = this.scheduleService.createSchedule(this.schedule);

        result$.subscribe(() => {
            this.started = !this.started;
        });

    }

    startTime(){
        var time = new Time();
        time.start = this.time;
        this.schedule.times.push(time);
    }

    stopTime(){
        var index = this.schedule.times.findIndex(t => t.end == null );
        this.schedule.times[index].end = this.time;
    }

    getStarted(){
        this.started = this.schedule.times.filter(t => t.end == null ).length > 0;
    }

}
