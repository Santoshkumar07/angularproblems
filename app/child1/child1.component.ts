import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component  {

  @Input() count:any;
 
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  mutulaFund() {
      this.count++;
      this.countChanged.emit(this.count);
    }
  stockMarket() {
      this.count--;
      this.countChanged.emit(this.count);
  }

}