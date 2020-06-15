import { TimeService } from './../../../services/time.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  time: string;
  interval: any;
  darkTheme: any;

  constructor(private timeService: TimeService) {
    this.setTheme();
  }

  ngOnInit(): void {
    this.startInterval();
  }

  startInterval(){
    this.time = this.getCurrentHourMin();
    this.setTimeService();
    this.interval = setInterval(() => {
      this.time = this.getCurrentHourMin();
      this.setTimeService();
    }, this.getMs());
  }

  stopInterval(){
    clearInterval(this.interval);
    this.interval = null;
  }

  getCurrentHourMin(){
    var date = new Date();
    return date.getHours() + ":" + date.getMinutes();
  }

  getMs(){
    if(!this.interval){
      var date = new Date();
      return 60000 - ((date.getSeconds() * 1000) + date.getMilliseconds());
    }

    return 60000;
  }

  setTimeService(){
    this.timeService.setTime(this.time);
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
