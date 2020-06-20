import { DialogComponent } from '../dialog/dialog.component';
import { ScheduleService } from '../../services/schedule.service';
import { Schedule } from '../../models/Schedule';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-time-list',
    templateUrl: './time-list.component.html',
    styleUrls: ['./time-list.component.scss']
})
export class TimeListComponent implements OnInit {

    @Input() date: Date;
    @ViewChild('confirmDeleteDialog') confirmDeleteDialog: DialogComponent;
    schedule: Schedule = {
        id: 0,
        date: new Date(),
        times: []
    };

    constructor(private scheduleService: ScheduleService) {
        this.getSchedules('06-17-2020');
    }

    ngOnInit(): void {

    }

    deleteTime(id: number) {
        this.confirmDeleteDialog.show((userAnswer) => {
            if (userAnswer) {
                this.schedule.times = this.schedule.times.filter(t => t.id != id);
                this.updateSchedule();
            }
        });
    }

    updateTime(index: number, prop: string, time: string) {
        this.schedule.times[index][prop] = time;
        this.updateSchedule();
    }

    updateSchedule() {
        this.scheduleService.updateSchedule(this.schedule).subscribe();
    }

    getSchedules(date?: string) {
        if (!date)
            date = new Date().toISOString().slice(0, 10);

        this.scheduleService.getSchedules(date).subscribe(schedule => {
            this.schedule = schedule[0]
        });
    }
}
