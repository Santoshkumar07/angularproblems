import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-forms1',
  templateUrl: './react-forms1.component.html',
  styleUrls: ['./react-forms1.component.css']
})
export class ReactForms1Component {

   constructor(private formBuilder:FormBuilder){}
  addressForm = this.formBuilder.group({
    Name: ['', [Validators.required, Validators.pattern('^[a-zA-z]{5,9}$')]],
    'address':this.formBuilder.group({
    City: ['', [Validators.required, Validators.pattern('^[a-zA-z]{5,9}$')]],
    Pincode: ['', [Validators.required, Validators.pattern('^[a-zA-z]{5,9}$')]],
    })
  })

  submitData() {
    console.log(this.addressForm)
    console.log(this.addressForm.value)

  }

}