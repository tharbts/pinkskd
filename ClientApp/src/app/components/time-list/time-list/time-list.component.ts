import { ModalComponent } from './../../modal/modal/modal.component';
import { ScheduleService } from './../../../services/schedule.service';
import { Schedule } from '../../../models/Schedule';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-time-list',
    templateUrl: './time-list.component.html',
    styleUrls: ['./time-list.component.scss']
})
export class TimeListComponent implements OnInit {

    @Input() date: Date;
    @ViewChild('dialog') dialog: ModalComponent;
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

    deleteTime(id: number){
        this.dialog.show();
        //this.schedule.times = this.schedule.times.filter(t => t.id != id);
    }

    getSchedules(date?: string) {
        this.scheduleService.getSchedules(date).subscribe(schedule => {
            this.schedule = schedule[0]
        });
    }
}
