import { NgxMaterialTimepickerDarkTheme } from './../../../models/NgxMaterialTimepickerDarkTheme';
import { TimeComponentService } from '../../../services/time-component.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-time',
    templateUrl: './time.component.html',
    styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
    time: string;
    interval: any;
    timepickerDarkTheme = new NgxMaterialTimepickerDarkTheme();

    constructor(private timeService: TimeComponentService) { }

    ngOnInit(): void {
        this.startInterval();
    }

    startInterval() {
        this.time = this.getCurrentHourMin();
        this.setTimeService();
        this.interval = setInterval(() => {
            this.time = this.getCurrentHourMin();
            this.setTimeService();
        }, this.getMs());
    }

    stopInterval() {
        clearInterval(this.interval);
        this.interval = null;
    }

    getCurrentHourMin() {
        var date = new Date();
        return date.getHours() + ":" + date.getMinutes();
    }

    getMs() {
        if (!this.interval) {
            var date = new Date();
            return 60000 - ((date.getSeconds() * 1000) + date.getMilliseconds());
        }

        return 60000;
    }

    setTimeService() {
        this.timeService.setTime(this.time);
    }

}
