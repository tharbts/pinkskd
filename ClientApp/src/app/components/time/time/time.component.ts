import { Component, OnInit} from '@angular/core';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  time;

  darkTheme: NgxMaterialTimepickerTheme = {
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

  constructor() {
  }

  ngOnInit(): void {
  }

  clearTime(){
    this.time = null;
  }

}
