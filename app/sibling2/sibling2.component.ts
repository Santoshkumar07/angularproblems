import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/dataservice.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  

    customerss:any=[]
    customerss1:any=[
      {"empId":104,"empName":"santosh","salary":50000},
      {"empId":105,"empName":"krishna","salary":62000},
      {"empId":106,"empName":"ajay","salary":35000}
    ]
  
  
  
  
  
    constructor(private dataService:DataService) {
      dataService.currentMsg.subscribe(successMsg => this.customerss = successMsg)
    }
    ngOnInit(): void {  }
    modifiedData(){
  
  
       // this.customerss.push( {"empId":104,"empName":"prem","salary":20000})
       // this.customerss.push( {"empId":105,"empName":"kumar","salary":19000})
        //this.customerss.push( {"empId":106,"empName":"kedari","salary":18000})
  
  
       for(var i=0;i<this.customerss1.length;i++){
      this.dataService.changeData(this.customerss1[i])
       }
    }
  
  }