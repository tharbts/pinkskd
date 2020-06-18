import { NgxMaterialTimepickerDarkTheme } from './../../../models/NgxMaterialTimepickerDarkTheme';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-time-badge',
    templateUrl: './time-badge.component.html',
    styleUrls: ['./time-badge.component.scss']
})
export class TimeBadgeComponent implements OnInit {

    @Input() time;
    @Output() timeSet = new EventEmitter<string>();
    timepickerDarkTheme = new NgxMaterialTimepickerDarkTheme();

    constructor() { }

    ngOnInit(): void {
    }

    triggerTimeSet(time: string) {
        this.timeSet.emit(time);
    }

}
