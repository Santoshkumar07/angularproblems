import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/dataservice.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

    customerss:any=[]
    customerss1:any=[
     {"empId":101,"empName":"santosh","salary":31000},
     {"empId":102,"empName":"kumar","salary":25000},
     {"empId":103,"empName":"sri","salary":32000}
    ]
   
    
     constructor(private dataService:DataService) {
   
     }
     ngOnInit(): void {
       this.dataService.currentMsg.subscribe(successMsg => this.customerss = successMsg)
      }
     modifiedData(){
     // this.customerss.push({"empId":101,"empName":"prem","salary":20000})
      //this.customerss.push({"empId":102,"empName":"kumar","salary":19000})
     //this.customerss.push({"empId":103,"empName":"kedari","salary":18000})
   
       //for(var c of this.customerss)
       //this.dataService.changeData(c)
   
       for(var i=0;i<this.customerss1.length;i++){
         this.dataService.changeData(this.customerss1[i])
          }
   
     }
   
   }