import { Component, OnInit } from '@angular/core';
import { time } from 'src/app/models/time';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.scss']
})
export class TimeListComponent implements OnInit {

  list: time[];

  constructor() {
    this.fillList();
   }

  ngOnInit(): void {

  }

  delete(index:number){
    this.list.splice(index, 1);
  }

  updateTime(index:number, prop:string, time:string){
    this.list[index][prop] = time;
  }

  fillList(){
    this.list = [
      {
        id: 1,
        start: "08:00",
        end: "09:00",
        notes:""
      },
      {
        id: 2,
        start: "11:00",
        end: "12:00",
        notes:""
      }
    ]
  }
}
