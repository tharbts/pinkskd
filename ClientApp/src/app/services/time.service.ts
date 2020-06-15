import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private timeSource = new BehaviorSubject<string>("");
  currentTime = this.timeSource.asObservable();

  constructor() { }

  setTime(time: string){
    this.timeSource.next(time);
  }

}
