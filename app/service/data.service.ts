import { BehaviorSubject } from "rxjs";

export class DataService {

  customers:any=[];

 // private behaviorSubj  = new BehaviorSubject<any[]>(this.customers);
 private behaviorSubj = new BehaviorSubject(this.customers)
  currentMsg = this.behaviorSubj.asObservable()
  changeData(data:any){

    console.log(data)
    this.behaviorSubj.value.push(data)
  }
}