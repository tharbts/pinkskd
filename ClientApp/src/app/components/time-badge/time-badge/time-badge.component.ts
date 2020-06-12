import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-badge',
  templateUrl: './time-badge.component.html',
  styleUrls: ['./time-badge.component.scss']
})
export class TimeBadgeComponent implements OnInit {

  darkTheme: any;
  @Input() time;
  @Output() timeSet = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.setTheme();
  }

  triggerTimeSet(time:string){
    this.timeSet.emit(time);
  }
  setTheme(){
    this.darkTheme = {
      container: {
        bodyBackgroundColor: '#424242',
        buttonColor: '#fff'
      },
      dial: {
        dialBackgroundColor: '#555',
      },
      clockFace: {
        clockFaceBackgroundColor: '#555',
        clockHandColor: '#ec407a',
        clockFaceTimeInactiveColor: '#fff'
      }
    };
  }

}
