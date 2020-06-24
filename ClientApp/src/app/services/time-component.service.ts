import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeComponentService {
  private timeSource = new BehaviorSubject<string>("");
  public currentTime = this.timeSource.asObservable();

  constructor() { }

  setTime(time: string){
    this.timeSource.next(time);
  }

}
