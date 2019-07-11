import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  public data: Subject<any>;

  constructor() { 
    this.data= new Subject();
  }
  getMethod(value){
  this.data.next(value);

  }
}
