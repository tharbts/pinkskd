import { TimeService } from './../../../services/time.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public time: string;
  public started: boolean = false;

  constructor(private timeService: TimeService) {
    timeService.currentTime.subscribe(time => this.time = time);
  }

  changeStatus(){
    this.started = !this.started;
    this.timeService.currentTime.subscribe(time => this.time = time);
  }

  ngOnInit(): void {
  }

}
