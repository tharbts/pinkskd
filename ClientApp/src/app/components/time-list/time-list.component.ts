import { DialogComponent } from '../dialog/dialog.component';
import { ScheduleService } from '../../services/schedule.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Schedule } from 'src/app/models/Schedule';

@Component({
    selector: 'app-time-list',
    templateUrl: './time-list.component.html',
    styleUrls: ['./time-list.component.scss']
})
export class TimeListComponent implements OnInit {

    @Input() date: Date;
    @ViewChild('confirmDeleteDialog') confirmDeleteDialog: DialogComponent;
    @ViewChild('notesDialog') notesDialog: DialogComponent;
    note:string;
    schedule:Schedule;
    query: any;

    constructor(private scheduleService: ScheduleService) {
        scheduleService.currentSchedule.subscribe(schedule => {
            if(schedule)
                this.schedule = schedule;
        });
    }

    ngOnInit(): void {}

    deleteTime(id: number) {
        this.confirmDeleteDialog.show((userAnswer) => {
            if (userAnswer) {
                this.schedule.times = this.schedule.times.filter(t => t.id != id);
                this.updateSchedule();
            }
        });
    }

    addNote(id: number){
        var index = this.schedule.times.findIndex( t => t.id == id);
        this.note = this.schedule.times[index].note;

        this.notesDialog.show((userAnswer) => {
            if (userAnswer) {
                this.schedule.times[index].note = this.note;
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
}
