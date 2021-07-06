import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'santosh',
  templateUrl: './santosh.component.html',
  styleUrls: ['./santosh.component.css']
})
export class SantoshComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string = 'sunny';
  age:number = 21;

  customer = {
    a : 101,
    b : 'santosh',
    c : true,
    d : [20, 21, 22],
    e : [[101,'kumar'], [102,'san'], [103,'sri']],
    
  }

}